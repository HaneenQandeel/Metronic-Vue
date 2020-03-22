<template>
    <div class="row">
        <div
            class="m-grid m-grid--hor m-grid--root m-page"
            style="margin-left: 295px;"
        >
            <div
                class="m-grid__item m-grid__item--fluid m-grid m-grid--hor m-login m-login--signin m-login--2 m-login-2--skin-1"
                id="m_login"
                style="background-image: url(../../../assets/app/media/img//bg/bg-1.jpg);"
            >
                <div class="m-grid__item m-grid__item--fluid m-login__wrapper">
                    <div class="m-login__container">
                        <div class="m-login__logo"></div>
                        <div class="m-login__signin">
                            <div class="m-login__head">
                                <h3 class="m-login__title">Register Admin</h3>
                            </div>
                            <form
                                class="m-login__form m-form"
                                action=""
                                @submit="checkForm()"
                            >
                                <div class="form-group m-form__group">
                                    <input
                                        class="form-control m-input"
                                        type="text"
                                        placeholder="Email"
                                        name="email"
                                        autocomplete="off"
                                        v-model="email"
                                    />
                                </div>
                                <div class="form-group m-form__group">
                                    <input
                                        class="form-control m-input m-login__form-input--last"
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        v-model="password"
                                    />
                                </div>
                                <p v-if="errors.length">
                                    <b>Please correct the following error(s):</b>
                                    <ul>
                                        <li v-for="error in errors">{{ error }}</li>
                                    </ul>
                                </p>
                                <div class="row m-login__form-sub"></div>
                                <div class="m-login__form-action">
                                    <button
                                        @click.prevent="RegisterBtn()"
                                        id="m_login_signin_submit"
                                        class="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air  m-login__btn m-login__btn--primary"
                                    >
                                        SignUp
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div class="m-login__signup">
                            <div class="m-login__head">
                                <h3 class="m-login__title">Sign Up</h3>
                                <div class="m-login__desc">
                                    Enter your details to create your account:
                                </div>
                            </div>
                            <form class="m-login__form m-form" action="">
                                <div class="form-group m-form__group">
                                    <input
                                        class="form-control m-input"
                                        type="text"
                                        placeholder="Fullname"
                                        name="fullname"
                                    />
                                </div>
                                <div class="form-group m-form__group">
                                    <input
                                        class="form-control m-input"
                                        type="text"
                                        placeholder="Email"
                                        name="email"
                                        autocomplete="off"
                                    />
                                </div>
                                <div class="form-group m-form__group">
                                    <input
                                        class="form-control m-input"
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                    />
                                </div>
                                <div class="form-group m-form__group">
                                    <input
                                        class="form-control m-input m-login__form-input--last"
                                        type="password"
                                        placeholder="Confirm Password"
                                        name="rpassword"
                                    />
                                </div>
                                <div
                                    class="row form-group m-form__group m-login__form-sub"
                                >
                                    <div class="col m--align-left">
                                        <label
                                            class="m-checkbox m-checkbox--light"
                                        >
                                            <input
                                                type="checkbox"
                                                name="agree"
                                            />I Agree the
                                            <a
                                                href="#"
                                                class="m-link m-link--focus"
                                                >terms and conditions</a
                                            >.
                                            <span></span>
                                        </label>
                                        <span class="m-form__help"></span>
                                    </div>
                                </div>
                                <div class="m-login__form-action">
                                    <button
                                        id="m_login_signup_submit"
                                        class="btn m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn m-login__btn--primary"
                                    >
                                        Sign Up</button
                                    >&nbsp;&nbsp;
                                    <button
                                        id="m_login_signup_cancel"
                                        class="btn m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div class="m-login__forget-password">
                            <div class="m-login__head">
                                <h3 class="m-login__title">
                                    Forgotten Password ?
                                </h3>
                                <div class="m-login__desc">
                                    Enter your email to reset your password:
                                </div>
                            </div>
                            <form class="m-login__form m-form" action="">
                                <div class="form-group m-form__group">
                                    <input
                                        class="form-control m-input"
                                        type="text"
                                        placeholder="Email"
                                        name="email"
                                        id="m_email"
                                        autocomplete="off"
                                    />
                                </div>
                                <div class="m-login__form-action">
                                    <button
                                        id="m_login_forget_password_submit"
                                        class="btn m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn m-login__btn--primary"
                                    >
                                        Request</button
                                    >&nbsp;&nbsp;
                                    <button
                                        id="m_login_forget_password_cancel"
                                        class="btn m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div class="m-login__account">
                            <span class="m-login__account-msg">
                                Don't have an account yet ?
                            </span>
                            &nbsp;&nbsp;
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	data: function () {
		return {
			email:'',
            password:'',
            errors: []
        }
    },
    methods: {
        RegisterBtn() {
            if (this.email && this.password) {
                return true;
            }
            this.errors = [];
            if (!this.email) {
                this.errors.push('Email required.');
                console.log('this.errors')
            }
            if (!this.password) {
                this.errors.push('Password required.');
            }
            axios.post("https://reqres.in/api/register", {
                    "email": this.email,
                    "password": this.password
                })
                .then(function(response) {
                    if (status === 200) {
                        resolve(true);
                        let token = response.data.token;
                        localStorage.setItem('token', token);
                        this.$router.push('/logIn');
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });

        }
    }
};
</script>
