<template>
    <div class="note">
        <h2>{{ myNote.header }}</h2>
        <p>{{ myNote.content }}</p>
    </div>
</template>

<script>
export default {
    props: ['myNote']
}
</script>