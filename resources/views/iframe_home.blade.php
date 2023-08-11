<title>iFrame Example</title>

<script defer src="https://unpkg.com/alpinejs@3.2.4/dist/cdn.min.js"></script>

<h1>iFrame Time</h1>


<iframe></iframe>

<script>
    let loadIframe = () => {
        let iframe = document.querySelector('iframe');

        iframe.setAttribute('src', 'http://laravel.test/iframe');
    }

    setTimeout(loadIframe, 2000);
</script>
