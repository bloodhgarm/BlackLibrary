<template>
    <vContainer v-if="book">
        <VLayout row wrap>
            <VFlex xs12 md10 offset-md1>
                <VLayout>
                    <VFlex xs12 md5 lg4>
                        <v-img :src="book.imagId" aspect-ratio="1" class="grey lighten-2" max-width="500" height="700">
                        </v-img>
                    </VFlex>
                    <VFlex xs12 md5 lg6>
                        <v-card-title>{{book.title}}</v-card-title>
                        <v-card-text class="text--primary pa-3">
                            <VCardSubtitle > Автор: {{book.autor}}</VCardSubtitle>

                            <v-row align="center" class="mx-0">
                               {{book.description}}
                            </v-row>
                            <v-row align="center" class="mt-3 pa-2">
                                <v-rating :value="book.rating" color="amber" dense half-increments readonly size="24">
                                </v-rating>
                                <div class="grey--text ml-4">{{book.rating}} ({{book.ratingCount}})</div>
                            </v-row>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn color="orange" text
                                href="https://royallib.com/get/txt/abnett_den/vozvishenie_horusa.zip">
                                Скачать
                            </v-btn>
                            <v-btn color="orange" text to="/">
                                Назад
                            </v-btn>
                        </v-card-actions>
                        <VFlex>
                            
                        </VFlex>
                    </VFlex>
                </VLayout>
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
                return this.$store.getters.getBooks.find(b => b.id == this.id)
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>