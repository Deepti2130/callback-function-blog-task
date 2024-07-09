const cl = console.log;

const cardContainer = document.getElementById("cardContainer")

let blogsArr = [ //we assume it is our DB
    {
        title:"Angular 18",
        content:"can easily be replaced by the provideHttpClient function, with options to support XSRF and JSONP.",
        blogId:"123"
    },

    {
        title:"Node js",
        content:"Node. js to create server-side web applications",
        blogId:"124"
    },

    {
        title:"Typescript",
        content:"offering optional static type-checking along with the latest ECMAScript features",
        blogId:"125"
    },

]

let blogsData = [];

const createBlogs = (blog) =>{
    //we get create a new blog object from form submit
    //API call(async js) send to DB i.e back end

    setTimeout(()=>{      

        let error = Math.random > 0.5 ? true: false;
        if(!error){
        blogsArr.push(blog)
        cl(`New blog is created successfully!!!`)
        fetchBlogs();
        }else{
            throw new Error(`Something went wrong while creating new blog`)
        }
    }, 2500)//2nd arg is timer fun.
}


const fetchBlogs = () => {
    //API call to all data from DB
    setTimeout(()=>{
        let error = Math.random > 0.5 ? true: false;
        if(!error){
            blogsData = blogsArr;
            cl(`Data fetched successfully!!!`, blogsData)
            createBlogscards(blogsData);
        }else{
            throw new Error(`Something went wrong while fetching blog`)
        }
        
    }, 2000)
}

const createBlogscards = (arr)=> { //means it is templating
    if(arr.length == 0){
        alert(`plz provide valid data`)
      }
  
        let result = " ";
        arr.forEach(ele => {
          result += `<div class="col-md-4 mb-4">
                      <div class="card">
                          <div class="card-header">
                            <h2 m-0>${ele.title}</h2>
                          </div>
                          <div class="card-body">
                              <p m-0>${ele.content}</p>
                          </div>
                          <div class="card-footer">
                          <button class="btn btn bg-primary">Edit</button>
                          <button class="btn btn bg-danger">Remove</button>
                          </div>
                      </div>
                  </div>
          `
          cardContainer.innerHTML = result;
          
        });
      }

createBlogs({  
        title:"Express js",
        content:"To build a single page, multipage, and hybrid web application",
        blogId:"126"  
})



