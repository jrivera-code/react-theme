import React, { Component } from 'react';
import {LOGIN_TEXTS} from '../../../constants/'
import CreateAccount from '../components/CreateAccount'
import RememberMe from '../components/RememberMe';

export default class FormRegister extends Component{
    state = {
        rememberChecked : false
    }
    handleRemember = ()=>{
        this.setState({rememberChecked : !this.state.rememberChecked})
    }

    render(){
        return (
            <div id="register-v2" class="row no-gutters">

                    <div class="intro col-12 col-md">

                        <div class="d-flex flex-column align-items-center align-items-md-start text-center text-md-left py-16 py-md-32 px-12">

                            <div class="logo bg-secondary mb-8">
                                <span>R</span>
                            </div>

                            <div class="title">
                                Welcome to the FUSE!
                            </div>

                            <div class="description pt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque.
                                Sed mollis velit facilisis facilisis viverra.
                            </div>

                        </div>
                    </div>

                    <div class="form-wrapper col-12 col-md-auto d-flex justify-content-center p-4 p-md-0">

                        <div class="form-content md-elevation-8 h-100 bg-white text-auto py-16 py-md-32 px-12">


                            <div class="title h5">Create account</div>

                            <div class="description mt-2">Sed mollis velit facilisis facilisis viverra</div>

                            <form name="registerForm" novalidate class="mt-8">

                                <div class="form-group mb-4">
                                    <input type="text" class="form-control" id="registerFormInputName" aria-describedby="nameHelp" />
                                    <label for="registerFormInputName">Name</label>
                                </div>

                                <div class="form-group mb-4">
                                    <input type="email" class="form-control" id="registerFormInputEmail" aria-describedby="emailHelp" />
                                    <label for="registerFormInputEmail">Email address</label>
                                </div>

                                <div class="form-group mb-4">
                                    <input type="password" class="form-control" id="registerFormInputPassword" />
                                    <label for="registerFormInputPassword">Password</label>
                                </div>

                                <div class="form-group mb-4">
                                    <input type="password" class="form-control" id="registerFormInputPasswordConfirm" />
                                    <label for="registerFormInputPasswordConfirm">Password (Confirm)</label>
                                </div>

                                <div class="terms-conditions row align-items-center justify-content-center pt-4 mb-8">
                                    <div class="form-check mr-1 mb-1">
                                        <label class="form-check-label">
                                            <input type="checkbox" class="form-check-input" aria-label="Remember Me" />
                                            <span class="checkbox-icon"></span>
                                            <span>I read and accept</span>
                                        </label>
                                    </div>
                                    <a href="#" class="text-secondary mb-1">terms and conditions</a>
                                </div>

                                <button type="submit" class="submit-button btn btn-block btn-secondary my-4 mx-auto" aria-label="LOG IN">
                                    CREATE MY ACCOUNT
                                </button>

                            </form>

                            <div class="login d-flex flex-column flex-sm-row align-items-center justify-content-center mt-8 mb-6 mx-auto">
                                <span class="text mr-sm-2">Already have an account?</span>
                                <a class="link text-secondary" href="pages-auth-login-v2.html">Log in</a>
                            </div>

                        </div>
                    </div>
                </div>
        )
    }
}