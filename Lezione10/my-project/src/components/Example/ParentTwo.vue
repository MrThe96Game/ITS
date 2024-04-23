<template>
    <div>Parent 2</div>
    <Modal @confirm="onConfirm" @cancel="onCancel">
        <template #default>
            <div>Vuoi tornare al menu principale?</div>
        </template>
        <template #mySlot>
            <div>Sto sostituendo mySlot</div>
            <button @click="test">Click</button>
        </template>
    </Modal>
</template>

<script>
import Modal from './Modal.vue';

export default {
    components: {
        Modal
    },
    methods: {
        onConfirm: function() {
            console.log('Confirm from Parent 2')
        },
        onCancel: function() {
            console.log('Cancel from Parent 2')
        },
        test: function() {
            console.log('Parent')
        }
    }
}
</script>