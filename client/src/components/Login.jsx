import React from 'react'

const Login = () => {
  return (
    <div style={{ margin:'auto', maxWidth:'800px', marginTop:'40px' }}>
        {/* // <!-- Pills navs --> */}
        <ul class="nav nav-tabs nav-fill mb-4" id="ex1" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="tab-login" data-bs-toggle="tab" data-bs-target="#pills-login" href="#pills-login" role="tab" type='button'
              aria-controls="pills-login" aria-selected="true">Login</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="tab-register" data-bs-toggle="tab" data-bs-target="#pills-register" href="#pills-register" role="tab" type='button'
              aria-controls="pills-register" aria-selected="false">Register</button>
          </li>
        </ul>
        {/* // <!-- Pills navs --> */}

        {/* // <!-- Pills content --> */}
        <div class="tab-content">
          <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
            <form>
              {/* <div class="text-center mb-3">
                <p>Sign in with:</p>
                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-facebook-f"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-google"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-twitter"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-github"></i>
                </button>
              </div>

              <p class="text-center">or:</p> */}

              {/* <!-- Email input --> */}
              <div class="form-outline mb-4">
                <input type="email" id="loginName" class="form-control" />
                <label class="form-label" for="loginName">Email or username</label>
              </div>

              {/* <!-- Password input --> */}
              <div class="form-outline mb-4">
                <input type="password" id="loginPassword" class="form-control" />
                <label class="form-label" for="loginPassword">Password</label>
              </div>

              {/* <!-- 2 column grid layout --> */}
              <div class="row mb-4">
                <div class="col-md-6 d-flex justify-content-center">
                  {/* <!-- Checkbox --> */}
                  {/* <div class="form-check mb-3 mb-md-0">
                    <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                    <label class="form-check-label" for="loginCheck"> Remember me </label>
                  </div> */}
                </div>

                {/* <div class="col-md-6 d-flex justify-content-center">
                  
                  <a href="#!">Forgot password?</a>
                </div> */}
              </div>

              {/* <!-- Submit button --> */}
              <button type="submit" class="btn btn-primary btn-block mb-4 p-2">Sign in</button>

              {/* <!-- Register buttons --> */}
              <div class="text-center">
                <p>Not a member? <a href="#!">Register</a></p>
              </div>
            </form>
          </div>

          <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
            <form>
              {/* <div class="text-center mb-3">
                <p>Sign up with:</p>
                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-facebook-f"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-google"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-twitter"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-github"></i>
                </button>
              </div>

              <p class="text-center">or:</p> */}

              {/* <!-- Name input --> */}
              <div class="form-outline mb-4">
                <input type="text" id="registerName" class="form-control" />
                <label class="form-label" for="registerName">Name</label>
              </div>

              {/* <!-- Username input --> */}
              <div class="form-outline mb-4">
                <input type="text" id="registerUsername" class="form-control" />
                <label class="form-label" for="registerUsername">Username</label>
              </div>

              {/* <!-- Email input --> */}
              <div class="form-outline mb-4">
                <input type="email" id="registerEmail" class="form-control" />
                <label class="form-label" for="registerEmail">Email</label>
              </div>

              {/* <!-- Password input --> */}
              <div class="form-outline mb-4">
                <input type="password" id="registerPassword" class="form-control" />
                <label class="form-label" for="registerPassword">Password</label>
              </div>

              {/* <!-- Repeat Password input --> */}
              <div class="form-outline mb-4">
                <input type="password" id="registerRepeatPassword" class="form-control" />
                <label class="form-label" for="registerRepeatPassword">Repeat password</label>
              </div>

              {/* <!-- Checkbox --> */}
              {/* <div class="form-check d-flex justify-content-center mb-4">
                <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
                  aria-describedby="registerCheckHelpText" />
                <label class="form-check-label" for="registerCheck">
                  I have read and agree to the terms
                </label>
              </div> */}

              {/* <!-- Submit button --> */}
              <button type="submit" class="btn btn-primary btn-block mb-3 p-2">Sign Up</button>
            </form>
          </div>
        </div>
    </div>
// <!-- Pills content -->
  )
}

export default Login