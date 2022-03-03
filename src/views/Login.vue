<template>
    <div class="container">
        <h1>This is the login/logout page <span class="badge badge-secondary">New</span></h1>

        <form id="loginform" name="loginform">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <div class="form-group">
                <label for="dropdown-typeahead">Dropdown Typeahead</label>
                <v-select :options="['Canada', 'United States']"></v-select>
            </div>
            <button type="submit" class="btn btn-primary"
                v-on:click="startLogin()">Submit</button>
            <button type="button" class="btn btn-secondary"
                v-on:click="reset()" title="Reset">Reset</button>
        </form>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import PingService from '../services/LoginLogoutService';

@Component
export default class Login extends Vue {
    startLogin(): void {
        console.log('Login :: startLogin');
        PingService.ping();
        PingService.login();
    }

    reset(): void {
        console.log('Login :: reset');
    }
}
</script>
