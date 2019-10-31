<template>
    <vContainer>
        <VLayout row wrap>
            <VFlex xs12 sm10 md8 offset-sm1 offset-md2>
                <VTextField v-model="searchItem" label="Поиск" />
                
                <v-slider v-model="slider" class="align-center" :max="5" :min="0" :step="1" hide-details>
                    <template v-slot:append>
                        <VTextField v-model="slider" class="mt-0 pt-0" hide-details single-line type="number"
                            style="width: 60px"></VTextField>
                    </template>
                </v-slider>
            </VFlex>
            <VFlex v-for="book in filteredBooks" :key="book.id" xs12 sm10 md8 offset-sm1 offset-md2>
                <v-card class="mx-auto" max-width="400">
                    <v-img class="white--text align-end" height="300px" contain :src="book.imagId">
                    </v-img>
                    <v-card-title>{{book.title}}</v-card-title>
                    <v-card-text class="text--primary">
                        <v-card-subtitle class="pb-0">{{book.autor}}</v-card-subtitle>
                        
                        <v-row align="center" class="mx-0">
                            {{book.description}}
                        </v-row>
                        <v-row align="center" class="mx-0">
                            <v-rating :value="book.rating" color="amber" dense half-increments readonly size="14">
                            </v-rating>
                            <div class="grey--text ml-4">{{book.rating}} ({{book.ratingCount}})</div>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="orange" text>
                            Читать
                        </v-btn>

                        <v-btn color="orange" text :to="{name:'book', params:{id:book.id}}">
                            Подробнее
                        </v-btn>
                        <v-btn color="orange" text href="https://royallib.com/get/txt/abnett_den/vozvishenie_horusa.zip">
                            скачать
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </VFlex>
        </VLayout>
    </vContainer>
</template>

<script>
    export default {
        props: {
            "book": {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                searchItem: null,
                slider: 0
            }
        },
        computed: {
            books() {
                return this.$store.getters.getBooks
            },
            filteredBooks() {
                let books = this.books
                if (this.searchItem) {
                    books = books.filter(b => b.title.toLowerCase().indexOf(this.searchItem.toLowerCase()) >= 0 || b
                        .description.toLowerCase().indexOf(this.searchItem.toLowerCase()) >= 0)

                }
                if (this.slider || this.slider === 0) {
                    books = books.filter(b => b.rating >= this.slider)  
                }
                return books
                
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>