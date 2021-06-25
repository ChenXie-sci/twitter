<template>
<div class="user-profile">
  <div class="user-panel">
    <h1 class="username">@{{user.username}}</h1><br>

    <div class="admin-badge" v-if="user.isAdmin">
      Admin
    </div>
    <div class="admin-badge" v-else>
     Not Admin
    </div>
    <div class="follower-count">
    <strong>Followers: {{followers}}</strong>
    </div>
  </div>
  <div class="twoot-wrapper">
    <TwootItem v-for="twoot in user.twoots" :key="twoot.id" :username="user.username" :twoot="twoot" @favourite="toggleFavourite" />
  </div>
</div>
   <div class="input">
      <form class="create-twoot" @submit.prevent="createNewTwoot" :class="{'--exceeded': newTwootCharacterCount > 180}">
        <label for="newTwoot"><strong>New twoot</strong>({{newTwootCharacterCount}}/180)</label>
        <textarea id="newTwoot" rows="4" v-model="newTwootContent" />

        <div class="create-twoot-type">
          <label for="newTwootType"><strong>Type:</strong></label>
          <select id="newTwootType" v-model="selectedTwootType">
            <option :value="option.value" v-for="(option, index) in twootTypes" :key="index">
              {{option.name}}
            </option>
          </select>
        </div>
        <button class="button"> Submit  </button>
      </form>
    </div>
    <router-view />
</template>

<script>
import TwootItem from './TwootItem.vue'
export default {
  name: 'UserProfile',
  components: {
    TwootItem,

  },
  data() {
    return {
      newTwootContent: '',
      selectedTwootType: 'instant',
      twootTypes: [
        {value: 'draft', name: 'Draft'},
        {value: 'instant', name: 'Instant Twoot'}
      ],
      followers: 0,
      user: {
        id:1,
        username: 'chenxie',
        firstname: 'chen',
        lastname: 'xie',
        email: 'chenxie23333@gmail.com',
        isAdmin: false,
        twoots: [
          {id: 1, content: 'Twotter is amazing'},
          {id: 2, content: 'Do not forget to describe'}
        ]
      }

    }
  },
  watch: {
    followers(newFollowerCount, oldFollowerCount){
      if(oldFollowerCount < newFollowerCount){
        console.log(`${this.user.username}alert`);
      }
    }
  },
  computed:{
     newTwootCharacterCount() {
       return this.newTwootContent.length;
     }
  },
  methods:{
    followusers() {
      this.followers++;
    },
    toggleFavourite(id){
      console.log(`Favourited Tweet #${id}`)
    },
    createNewTwoot() {
      if (this.newTwootContent && this.selectedTwootType !== 'draft'){
        this.user.twoots.unshift({
          id: this.user.twoots.length +1,
          content: this.newTwootContent
        })
        this.newTwootContent = '';
      } 
    }
  },
  mounted() {
    this.followusers();
  }
}

</script>

<style  scoped>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  padding: 50px 5%;
}

.user-panel {
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #dfe3e8;
}

.admin-badge {
  background:purple;
  color: white;
  border-radius: 5px;
  margin-right: auto;
  padding: 0 10px;
}

h1 {
  margin:0;
}

.twoot-wrapper {
  display: grid;
  grid-gap: 10px;
}

.create-twoot-type {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
}

.--exceeded {
  color: red;
  border-color: red;

}

.input {
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  padding: 50px 5%;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #dfe3e8;
  position:fixed;
  width: 150px;
  length: 400px;
  left: 50px;
  bottom: 100px;
}

.button {
  color: white;
  border-radius: 5px;
  background-color: purple;
}
</style>
