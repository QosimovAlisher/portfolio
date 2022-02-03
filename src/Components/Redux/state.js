let rerenderEntreTre = () => {
    console.log('state ')
} 

export let state = {
   profilePage:{
    posts : [
        {id:1 ,  massage:'new masseges here ' , likes: '123'},
        {id:2 ,  massage:'new masseges here ' , likes: '123'},
        {id:3 ,  massage:'new masseges here ' , likes: '123'},
    ],
    newPostText: 'it inkubatior'
   
   },
     massagesPage:{
        massage :[
            {id:1, massage: 'new massage'},
            {id:1, massage: 'new massage'},
            {id:1, massage: 'new massage'},
            {id:1, massage: 'new massage'},
        ],
        dialogs : [
            { id:1, name:'Alisher' },
            { id:2, name:'Alisher'  },
            { id:3, name:'Alisher' },
            { id:4, name:'Alisher' }
           
          ],
          dialogs : [
            { id:1, name:'Alisher' },
            { id:2, name:'Alisher'  },
            { id:3, name:'Alisher' },
            { id:4, name:'Alisher' }
           
          ]
     }
}

 
 export let addPost = () => {
   if(state.profilePage.newPostText > ' '){
    let newPost = {
        id:5,
        massage: state.profilePage.newPostText,
        likes:21 
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText= '' ;
    rerenderEntreTre()
   }

};


 
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntreTre( )
    
};


export  const subscribe = (observer) => {
    rerenderEntreTre = observer;
}