<template>
    <div>
        <h1>This is the login/logout page</h1>
        <form id="loginform" name="loginform">
            <input type="text" id="username" name="username" max="50" />
            <input type="password" id="password" name="password" />
            <button
                id="loginbutton"
                name="loginbutton"
                v-on:click="startLogin"
                title="Login"
            >
                Login
            </button>
            <button
                id="resetbutton"
                name="resetbutton"
                v-on:click="reset"
                title="Reset"
            >
                Reset
            </button>
        </form>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// import PingService from '../services/LoginLogoutService';

@Component
export default class Login extends Vue {
    startLogin(): void {
        console.log('Login :: startLogin');
        // PingService.ping();
    }

    reset(): void {
        console.log('Login :: reset');
    }
}
</script>
