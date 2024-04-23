<template>
    <div>Parent 1</div>
    <Modal :myText="'Vuoi cancellare questo elemento?'" @confirm="onConfirm" @cancel="onCancel"/>
</template>

<script>
import Modal from './Modal.vue';

export default {
    components: {
        Modal
    },
    methods: {
        onConfirm: function() {
            console.log('Confirm from Parent 1')
        },
        onCancel: function() {
            console.log('Cancel from Parent 1')
        },
    } 
}
</script>