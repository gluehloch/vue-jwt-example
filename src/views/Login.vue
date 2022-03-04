<template>
    <div class="container">
        <h1>This is the login/logout page <span class="badge badge-secondary">New</span></h1>

        <form id="loginform" name="loginform">
            <div class="form-group">
                <label for="exampleInputEmail1" class="form-label-sm">Email address</label>
                <input type="email" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control form-control-sm" id="exampleInputPassword1">
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label form-check-label-sm" for="exampleCheck1">Check me out</label>
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
        <hr/>
        <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" id="inputEmail4">
                </div>
                <div class="form-group col-md-6">
                    <label for="inputPassword4">Password</label>
                    <input type="password" class="form-control" id="inputPassword4">
                </div>
            </div>
            <div class="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
            </div>
            <div class="form-group">
                <label for="inputAddress2">Address 2</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" class="form-control form-control-sm" id="inputCity">
                </div>
                <div class="form-group col-md-4">
                    <label for="inputState">State</label>
                    <v-select :options="['Canada', 'United States']"></v-select>
                    <!--
                    <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                    -->
                </div>
                <div class="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" class="form-control form-control-sm" id="inputZip">
                </div>
            </div>
            <div class="form-group">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck">
                    <label class="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Sign in</button>
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
<style scoped>
>>> {
 --vs-font-size: 0.875rem;
 --vs-line-height: 1.4;
}
</style>
