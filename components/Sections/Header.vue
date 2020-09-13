
<template>
    <header class="the-header">
        <div class="container">
            <a class="" href="/">
                <img src="@/assets/images/logo.png" height="70px" width="74px" alt="Logo Polina">
            </a>
            <div class="navigation-items">
                <select v-model="selected" class="lang-switcher" @change="changeLocale()" aria-label="Можно помянять язык тут">
                    <option selected="selected">{{ $i18n.locale }}</option>
                    <option v-for="locale in $i18n.locales" v-if="locale.code !== $i18n.locale" :key="locale.code" >
                        {{ locale.code }}
                    </option>
                </select>
                <ul class="nav-list">
                    <li class="nav-item">
                        <a class="ani" href="/blog">
                            <span v-html="$t('posts')"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>


<style lang="scss">
    .the-header {
        background-color: $background-secondary;
        margin: 0px;
        /*padding: 1.5em 0;*/
        height: 8rem;
        width: 100%;
        display: flex;
        justify-content: space-around;
        -webkit-box-align: center;
        align-items: center;
        z-index: 100;
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, .05);

        &--dark {
            background-color: #161618;
        }

        .container{
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: justify;
            justify-content: space-between;
        }

    }
    //TODO: add new file
    .navigation-items{
        display: -webkit-box;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        justify-content: space-between;
    }

    .nav-list{
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-direction: row;
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .lang-switcher{
        margin-right: 2rem;
        border-radius: 5px;
    }

    .lang-switcher:hover{
        margin-right: 2rem;
        border-color: $primary;
        border-radius: 5px;
        border-width: 2px;
    }

    .nav-item{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    select{
        border-radius: 0;
        color: $primary;
        padding: 1rem 3rem 1rem 1rem;
        border: 1px solid transparent;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 50"><path fill="%23ffbd59" d="M0 0h100L50 50z"/></svg>') no-repeat;
        background-color: rgba(0, 0, 0, 0);
        background-position-x: 0%;
        background-position-y: 0%;
        background-repeat: no-repeat;
        background-size: auto;
        background-size: 12px;
        background-position: calc(100% - 1rem) 50%;
        background-repeat: no-repeat;
        text-transform: uppercase;
        -webkit-transition: border-color .3s;
        transition: border-color .3s;
        cursor: pointer;
    }

    a.ani span {
        display: inline-block;
        position: relative;
    }
</style>

<script>
export default {
    data() {
        return {
            selected: 'fr',
            hover: false,
        };
    },
    methods: {
        changeLocale () {
            this.$router.push(this.switchLocalePath(this.selected));
        }
    }
}
</script>
