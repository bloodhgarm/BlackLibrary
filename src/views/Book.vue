<template>
    <vContainer v-if="book">
        <VLayout row wrap>
            <VFlex xs12 md10 offset-md1>
                
            </VFlex>
            <VFlex xs12 md10 offset-md1>
                
            </VFlex>
        </VLayout>
    </vContainer>
</template>

<script>
    export default {
        props: {
            'id': {
                type: String,
                required: true
            }
        },
        computed: {
            book() {
                return this.$store.getters.getBook.find(b => b.id == this.id)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>