
// object literals

// const blogs = [
// {title: 'why mac & cheese rules', likes: 30},
// {title : '10 things to make with marmite', likes: 50}
// ];

// console.log(blogs);



let user = {
    name : 'Shahadat', 
    age: 19,
    email: "shahadat15-13593@diu.ed.bd",
    location: 'Bnagladesh',
    blogs: [

    {title: 'why mac & cheese rules', likes: 30},
    {title : '10 things to make with marmite', likes: 50}
],
    login: function(){
        console.log('The user logged in.');

    },

    logout:function(){
        console.log('The user logged out.');

      
    },
  
logBlog(){
   // console.log(this.blogs);
   console.log('This user has written the following blogs:');
   this.blogs.forEach(blog => {
       console.log(blog.title, blog.likes);
   })
}

}; 



user.logBlog();
