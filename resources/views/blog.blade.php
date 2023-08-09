<head>
    <!-- Add Alpine -->
    <script defer src="https://unpkg.com/alpinejs@3.2.4/dist/cdn.min.js"></script>
</head>
<x-layout>
    <div 
        id="posts"
        x-data="{posts: [] }"
        x-init="
            fetch('/posts')
                .then(response => response.json())
                .then(items => posts = items);
        "
    >
        <template x-for="(post, index) in posts" :key="index">
            <h1 x-text="post.title"></h1>
        </template>
    </div>
</x-layout>