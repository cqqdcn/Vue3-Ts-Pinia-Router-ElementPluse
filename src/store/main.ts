import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    username: 'admin',
    password: 'e10adc3949ba59abbe56e057f20f883e'
  }),
  getters: {
    useGetter(state){

    }
  },
  actions: {
    updateName(){

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

