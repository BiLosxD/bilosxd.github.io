<template>
    <div id="home">
        <h1 class="no_font">BRSTAMARIA</h1>
        <section id="banner">
            <div class="overlay">
                <h2>Welcome</h2>
                <h3>to my site</h3>
                <div class="default_btn">Check out my Portfolio</div>
            </div>
            <div id="wave"></div>
        </section>
        <section id="about">
            <div class="header">
                <h2>About Me</h2>
            </div>
            <div class="content">
                <div class="left">
                    <div class="violator">Check me out!</div>
                    <img class="front" src="/static/ako.jpg" />
                    <img class="back" src="/static/ako.jpg" />
                    <div class="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
                <div class="right">
                    <div class="header_right">
                        <h2>Skills</h2>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                    </div>
                    <div class="content_right">
                        <ul>
                            <li>
                                <div class="list_item">Nuxt JS</div>
                            </li>
                            <li>
                                <div class="list_item">Laravel</div>
                            </li>
                            <li>
                                <div class="list_item">PHP</div>
                            </li>
                            <li>
                                <div class="list_item">Javascript</div>
                            </li>
                            <li>
                                <div class="list_item">jQuery</div>
                            </li>
                            <li>
                                <div class="list_item">MySQL</div>
                            </li>
                            <li>
                                <div class="list_item">Drupal</div>
                            </li>
                            <li>
                                <div class="list_item">CSS/Stylus/SCSS/SASS</div>
                            </li>
                            <li>
                                <div class="list_item">AWS</div>
                            </li>
                            <li>
                                <div class="list_item">npm</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                animateUs: [
                    {
                        target: '#about .header h2',
                        single: true
                    },
                    {
                        target: '#about .content .left',
                        single: true
                    },
                    {
                        target: '#about .content .right',
                        single: true
                    },
                    {
                        target: '#about .content .right .content_right ul li',
                        single: false
                    }
                ]
            }
        },
        methods: {
            handleScroll () {
                const me = this
                me.scrollAnimate(me.animateUs)
            }
        },
        mounted () {
            const me = this
            me.handleScroll()
        },
        beforeMount () {
            window.addEventListener('scroll', this.handleScroll)
        },
        beforeDestroy () {
            window.removeEventListener('scroll', this.handleScroll)
        }
    }
</script>
