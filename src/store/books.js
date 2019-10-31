import Vue from 'vue'
export default{
    
    state: {
        books:[],
    },
    mutations: {
        SET_BOOKS(state, payload){
            state.processing = payload
        },
        
    },
    actions:{
        LOAD_BOOKS({commit}){
            Vue.$db.collections('books')
            .get()
            .then(querySnapshot => {
                let books = []
                querySnapshot.forEach(s => {
                    const data = s.data()
                    let book = {
                        id: s.id,
                        title: data.title,
                        description: data.description,
                        imageUrl: data.imageUrl,
                        rating: data.rating,
                        ratingCount: data.ratingCount,
                        autor: data.autor,
                        bookDownload: data.bookDownload
                    }
                });
            })
            .catch(error => console.log(error))
        }
    }, 
    getters:{
        getBooks: (state) => state.books,
    }
}