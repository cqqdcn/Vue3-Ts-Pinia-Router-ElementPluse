import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    username: '',
    password: ''
  }),
  getters: {
    useGetter(state){

    }
  },
  actions: {
    updateName(value:string){
      this.username = value
    }
  },
})

export const useMenuIcon = defineStore({
  id: 'MenuIcon',
  state: () => ({
    isCollapse: false
  }),
  getters: {

  },
  actions: {
    async setCollapse(){
      this.isCollapse = !this.isCollapse
    }
  }
});

