<template>
    <keep-alive>
        <div>
            <!--        This is main app Vue-->
            {{message}}
            <router-link to="/test" exact>Cl;ick here go to test page</router-link>
            <router-link to="/" exact>Cl;ick here go to home page</router-link>
            <router-view></router-view>
        </div>
    </keep-alive>
</template>

<script>
    export default {
        data() {
            return {
                message: 'Hello everyone'
            }
        }
    };
</script>
