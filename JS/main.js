const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const btnOption = $$('.option__content')
const contents = $$('.my_option')

const question = $('.content__question')
const btnClose = $('.content__question-btn')

// console.log(btnOption)

btnOption.forEach((option, index) => {
    const content = contents[index]
    option.onclick = () => {
        if(index === 0)
            handleClick(content)
        if(index === 1)
            handleClick(content)
        if(index === 2)
            handleClick(content)


    }
});

function handleClick(element){
    if(element.classList.contains('my_option')){
        element.classList.remove('my_option')
    }else {
        element.classList.add('my_option')
    }
}

btnClose.onclick = () => {
    question.style.display = "none"
}


//==================

const Posts = [
    {
        id: 1,
        name: 'John Doe',
        images: {
            avatar:'./img/avatar2.png',
            image1: './img/mountains.jpg',
            image2: './img/lights.jpg',
        }
        // row: 6
        ,
        status: {
            status1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            status2: ''
        },
        timePost: '1 min'
    },
    {
        id: 2,
        name: 'Jane Doe', 
        images: {
            avatar:'./img/avatar3.png',
            image1: '',
            image2: '',
        },
        status: {
            status1:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            status2: '',
        },
        timePost: '16 min'
    },
    {
        id: 3,
        name: 'Angie Jane',
        images: {
            avatar:'./img/avatar5.png',
            image1: './img/nature.jpg',
            image2: '',
        },
        status: {
            status1:'Have you seen this?',
            status2:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        timePost: '16 min'
    }
]

const newPosts = Posts.map((post, index) => {
    let row
    if(post.images.image2 === '')
        row = 12
    else
        row = 6
    return{
        id: post.id,
        name: post.name,
        images: post.images,
        status: post.status,
        timePost: post.timePost,
        rows: row
    }
})

//===============handl post ======================

const Post = newPosts.map((post, index) => {
    console.log(post.rows)
    return`
        <div class="content__post">
            <div class="content__post-header">
                <div class="content__post-header-info">
                    <img class="content__post-header-info-img" src="${post.images.avatar}" alt="">
                    <p class="content__post-header-info-name">${post.name}</p>
                </div>
                <div class="content__post-header-time">
                    <span>${post.timePost}</span>
                </div>
            </div>
            <div class="content__post-tenor">
                <p class="post__paragraph">
                    ${post.status.status1}                          
                </p>
            </div>
            <div class="gird">
                <div class="row">
                    <div class="col l-${post.rows}">
                        <img class="post__col-img" src="${post.images.image1}" alt="">
                    </div>
                    <div class="col l-${post.rows}">
                        <img class="post__col-img" src="${post.images.image2}" alt="">
                    </div>
                </div>
            </div>
            <div class="content__post-tenor">
                <p class="post__paragraph">
                ${post.status.status2}
                </p>
            </div>
            <div class="content__post-react">
                <button class="content__post-react-btn" style="--btn-color: #57707d">
                    <i class="fa-solid fa-thumbs-up"></i>
                    Like
                </button>
                <button class="content__post-react-btn" style="--btn-color: #4d636f">
                    <i class="fa-solid fa-comment"></i>
                    Comment
                </button>
            </div>
        </div>
    `
})
$('.news').innerHTML = Post.join('')