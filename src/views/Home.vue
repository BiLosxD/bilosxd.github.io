<template>
    <div id="home">
        <h1 class="no_font">BRSTAMARIA</h1>
        <!-- Banner -->
        <section id="banner">
            <div class="overlay">
                <h2>Welcome</h2>
                <h3>to my site</h3>
                <div class="default_btn">Check out my Portfolio</div>
            </div>
            <div id="wave"></div>
        </section>
        <!-- About -->
        <section id="about">
            <div class="header">
                <h2>About Me</h2>
            </div>
            <div class="content">
                <div class="left">
                    <img class="front" src="/static/ako.jpg" />
                </div>
                <div class="right">
                    <div class="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div class="skills">
                        <ul>
                            <li v-for="(data, key) in skills" :key="key">
                                <div class="list_item">{{ data }}</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <!-- Portfolio -->
        <section id="portfolio">
            <div class="header">
                <h2>My Portfolio</h2>
            </div>
            <div class="content">

            </div>
            <div id="wave"></div>
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
                        target: '#about .content .right .skills ul li',
                        single: false
                    },
                    {
                        target: '#portfolio .header h2',
                        single: true
                    },
                ],
                skills: ['Web Page Animation & Optimization', 'CSS, Stylus, Sass, Scss, Less', 'Javascript (ES5, ES6), jQuery', 'Vue.js, Nuxt.js, Adonis.js', 'API Integration (axios)', 'PHP', 'Laravel', 'Drupal', 'SEO', 'Linux (Ubuntu, CentOS)', 'SSH', 'AWS', 'NGINX, APACHE', 'MySQL', 'GIT']
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
