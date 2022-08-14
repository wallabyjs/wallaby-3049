<script lang="ts">
    import {foo, foo$} from "@libs/foo/demo";
    import {bar} from "@libs/bar/demo";
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{foo}
{bar}
{$foo$}
