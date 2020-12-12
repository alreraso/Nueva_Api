const axios = require('axios');
const dotenv = require ('dotenv') ;

dotenv.config();

const urlC = `http://3.237.28.250:3001/category`;
const urlW = `http://3.237.28.250:3001/words`;


const resolvers = {
    Query: {
        allCategories: async (_) => {
            return axios
                .get(`${urlC}/AllCategories`)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        categoryByName: async (_, { name }) => {
            return axios
                .get(`${urlC}/category/${name}`)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        categoryByLevel: async (_, { level }) => {
            return axios
                .get(`${urlC}/levelCategory/${level}`)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        allWords: async (_) => {
            return axios
                .get(`${urlW}/AllWords`)
                .then((res) => {
                    console.log("All Words");
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        wordsByCategory: async (_, { category }) => {
            return axios
                .get(`${urlW}/categoryWord/${category}`)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        wordsByName: async (_, { name }) => {
            return axios
                .get(`${urlW}/word/${name}`)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
    },
    Mutation: {
        createCategory: async (_, { body }) => {
            return axios
                .post(`${urlC}/newCategory`, body)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        updateCategory: async (_, { body }) => {
            return axios
                .put(`${urlC}/updateCategory`, body)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        deleteCategory: async (_, { body }) => {
            return axios
                .put(`${urlC}/deleteCategory`, body)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        createWord: async (_, { body }) => {
            return axios
                .post(`${urlW}/newWord`, body)
                .then((res) => {
                    console.log("Create words");
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        updateWord: async (_, { body }) => {
            return axios
                .put(`${urlW}/updateWord`, body)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        deleteWord: async (_, { body }) => {
            return axios
                .delete(`${urlW}/deleteWord`, body)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
    },
};

module.exports =  resolvers;
