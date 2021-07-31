module.exports = {

    posts: [
        {
            id: "ksdjvbksdbvk",
            title: "Mural test",
            descripttion: "Test description"
        },
    ],

    getAll() {
        return this.posts;
    },

    newPost(title, description) {
        this.posts.push({ id: generateID(), title, description });

    },

    deletePost(id) {
        this.posts.forEach((item, i) => {
            if (item.id == id) {
                this.posts.splice(item, i)
            }
            console.log(this.posts);
        })
    }
}

function generateID() {
    return Math.random().toString(36).substr(2, 9);
}