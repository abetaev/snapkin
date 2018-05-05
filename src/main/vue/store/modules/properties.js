export default {
  data: {
    properties: {
      "property 1": {
        default: false,
        description: "sample property",
        type: Boolean
      },
      "property 2": {
        default: "sample value",
        description: "sample string properti",
        type: Boolean
      },
      "property 3": {
        default: 1234,
        description: "sample integer property",
        type: Boolean
      }
    }
  },
  actions: {
    
  },
  getters: {
    getProperty(name) {
      return this.$data.properties[name];
    },
    allProperties() {
      return this.$data.properties;
    }
  },
  mutations: {
    setProperty(name, value) {
      if (this.$data.properties[name] == undefined) {
        throw "no such property '" + name + "'";
      }
      this.$data.properties[property] = value;
    }
  }
};
