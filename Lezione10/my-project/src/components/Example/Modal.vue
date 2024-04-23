<template>
    <div>
        <slot>
            <div>
                Qui ho il testo
            </div>
        </slot>
        <slot name="mySlot">
            <div>
                Qui ho il testo 2
            </div>
        </slot>
        <button @click="confirm">Confirm</button>
        <button @click="cancel">Cancel</button>
    </div>
</template>

<script>
export default {
    props: {
        myText: {
            type: String
        }
    },
    emits: ['confirm', 'cancel'],
    methods: {
        confirm: function() {
            this.$emit('confirm');
        },
        cancel: function() {
            this.$emit('cancel');
        },
        test: function() {
            console.log('Child')
        }
    }
}
</script>