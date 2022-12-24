import React from 'react'

const Footer = () => {
  return (
    <>
    <div class="container-footer">
          <footer class="py-3 my-4">
            <ul class="nav justify-content-center pb-3 mb-3">
              <li class="nav-item">
                <a href="#" class="nav-link px-2 text-muted">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link px-2 text-muted">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link px-2 text-muted">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link px-2 text-muted">
                  FAQs
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link px-2 text-muted">
                  About
                </a>
              </li>
            </ul>

            <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
              <div class="footer-content">
                <p class="mb-0">&copy; 2022 Company, Incorporation.</p>
                <p class="mb-2">All rights reserved.</p>
              </div>
              <div class="social-icons">
                <a class="link-dark" href="#">
                  <img src="/icons/Instagram.png" alt="" width="30.5rem" />
                </a>
                <a class="link-dark" href="#">
                  <img src="/icons/LinkedIn.png" alt="" width="32.5rem" />
                </a>
              </div>
            </div>
          </footer>
        </div>
    </>
  )
}

export default Footer;