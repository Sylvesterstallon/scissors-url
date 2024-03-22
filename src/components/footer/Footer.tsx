import { foooterText } from "../../assets/dataset";


const Footer = () => {
    return (
      <section className="w-full h-full flex items-center justify-center relative p-10 m-10">
        <div className="footer-container h-full w-[95%] gap-10 py-10 px-20 flex justify-between">
          <div className="left">
            <div>
              <svg
                width="155"
                height="40"
                viewBox="0 0 155 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.5606 8.43938C30.9748 7.85354 30.0167 7.85354 29.4308 8.43938L26.3778 11.4948C25.1269 10.6627 23.6915 10.2497 22.25 10.2497C20.331 10.2497 18.3872 10.9822 16.9472 12.4469L12.4472 16.9472C9.88083 19.5106 9.56451 23.4747 11.4922 26.384L8.43938 29.4394C7.85354 30.0253 7.85354 30.9745 8.43938 31.5606C8.73242 31.8536 9.11619 32 9.49995 32C9.88395 32 10.2675 31.8536 10.5605 31.5606L13.6133 28.5051C14.8645 29.3372 16.3085 29.7502 17.75 29.7502C19.6441 29.7502 21.5878 29.0178 23.0528 27.553L27.5442 23.053C30.1105 20.4893 30.4269 16.5252 28.4989 13.616L31.5606 10.5605C32.1465 9.97466 32.1465 9.02522 31.5606 8.43938ZM26.7412 17.75C26.7412 18.9512 26.2724 20.0821 25.4231 20.9317L20.9317 25.4317C20.0792 26.2813 18.9265 26.75 17.75 26.75C17.0703 26.75 16.4199 26.5832 15.8223 26.2988L18.0358 24.0605C18.6217 23.4747 18.6217 22.5255 18.0358 21.9394C17.4747 21.3536 16.5255 21.3536 15.9397 21.9394L13.7014 24.1777C13.4144 23.5829 13.2502 22.9325 13.2502 22.25C13.2502 21.0488 13.7189 19.9179 14.5685 19.0683L19.0436 14.5683C19.8932 13.7187 21.0488 13.25 22.25 13.25C22.9297 13.25 23.577 13.4168 24.1748 13.7012L21.8926 15.9862C21.3068 16.572 21.3068 17.5212 21.8926 18.1073C22.1857 18.4004 22.5692 18.5468 22.9532 18.5468C23.3341 18.5468 23.7179 18.4004 24.0107 18.1073L26.2902 15.8223C26.577 16.4168 26.7412 17.0674 26.7412 17.75Z"
                  fill="#001F3F"
                />
                <path
                  d="M40 8V32"
                  stroke="#141414"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M55.296 27.336C51.96 27.336 49.632 25.752 48.696 23.184L51.528 21.528C52.176 23.232 53.472 24.096 55.392 24.096C57.24 24.096 58.08 23.352 58.08 22.32C58.08 21.72 57.816 21.264 57.288 20.952C56.76 20.616 55.824 20.256 54.456 19.872C52.944 19.416 52.032 19.056 50.976 18.312C49.944 17.544 49.392 16.392 49.392 14.856C49.392 13.344 49.92 12.12 51 11.232C52.08 10.32 53.4 9.864 54.912 9.864C57.624 9.864 59.76 11.256 60.912 13.632L58.128 15.24C57.456 13.8 56.376 13.08 54.912 13.08C53.544 13.08 52.704 13.776 52.704 14.76C52.704 15.288 52.92 15.72 53.352 16.056C53.808 16.368 54.648 16.728 55.896 17.112L57.048 17.496C57.312 17.568 57.672 17.712 58.128 17.904C58.584 18.072 58.944 18.24 59.184 18.408C59.688 18.72 60.456 19.32 60.768 19.896C61.128 20.472 61.392 21.312 61.392 22.272C61.392 23.832 60.816 25.056 59.688 25.968C58.56 26.88 57.096 27.336 55.296 27.336ZM71.403 27.336C68.883 27.336 66.795 26.496 65.139 24.816C63.483 23.136 62.667 21.072 62.667 18.6C62.667 16.128 63.483 14.04 65.139 12.384C66.795 10.704 68.883 9.864 71.403 9.864C74.451 9.864 77.187 11.4 78.627 13.824L75.771 15.48C74.931 13.968 73.323 13.08 71.403 13.08C69.771 13.08 68.451 13.584 67.443 14.616C66.459 15.648 65.955 16.968 65.955 18.6C65.955 20.208 66.459 21.528 67.443 22.56C68.451 23.592 69.771 24.096 71.403 24.096C73.323 24.096 74.979 23.184 75.771 21.72L78.627 23.376C77.187 25.8 74.475 27.336 71.403 27.336ZM80.6616 27V10.2H83.9736V27H80.6616ZM92.5616 27.336C89.2256 27.336 86.8976 25.752 85.9616 23.184L88.7936 21.528C89.4416 23.232 90.7376 24.096 92.6576 24.096C94.5056 24.096 95.3456 23.352 95.3456 22.32C95.3456 21.72 95.0816 21.264 94.5536 20.952C94.0256 20.616 93.0896 20.256 91.7216 19.872C90.2096 19.416 89.2976 19.056 88.2416 18.312C87.2096 17.544 86.6576 16.392 86.6576 14.856C86.6576 13.344 87.1856 12.12 88.2656 11.232C89.3456 10.32 90.6656 9.864 92.1776 9.864C94.8896 9.864 97.0256 11.256 98.1776 13.632L95.3936 15.24C94.7216 13.8 93.6416 13.08 92.1776 13.08C90.8096 13.08 89.9696 13.776 89.9696 14.76C89.9696 15.288 90.1856 15.72 90.6176 16.056C91.0736 16.368 91.9136 16.728 93.1616 17.112L94.3136 17.496C94.5776 17.568 94.9376 17.712 95.3936 17.904C95.8496 18.072 96.2096 18.24 96.4496 18.408C96.9536 18.72 97.7216 19.32 98.0336 19.896C98.3936 20.472 98.6576 21.312 98.6576 22.272C98.6576 23.832 98.0816 25.056 96.9536 25.968C95.8256 26.88 94.3616 27.336 92.5616 27.336ZM106.038 27.336C102.702 27.336 100.374 25.752 99.4382 23.184L102.27 21.528C102.918 23.232 104.214 24.096 106.134 24.096C107.982 24.096 108.822 23.352 108.822 22.32C108.822 21.72 108.558 21.264 108.03 20.952C107.502 20.616 106.566 20.256 105.198 19.872C103.686 19.416 102.774 19.056 101.718 18.312C100.686 17.544 100.134 16.392 100.134 14.856C100.134 13.344 100.662 12.12 101.742 11.232C102.822 10.32 104.142 9.864 105.654 9.864C108.366 9.864 110.502 11.256 111.654 13.632L108.87 15.24C108.198 13.8 107.118 13.08 105.654 13.08C104.286 13.08 103.446 13.776 103.446 14.76C103.446 15.288 103.662 15.72 104.094 16.056C104.55 16.368 105.39 16.728 106.638 17.112L107.79 17.496C108.054 17.568 108.414 17.712 108.87 17.904C109.326 18.072 109.686 18.24 109.926 18.408C110.43 18.72 111.198 19.32 111.51 19.896C111.87 20.472 112.134 21.312 112.134 22.272C112.134 23.832 111.558 25.056 110.43 25.968C109.302 26.88 107.838 27.336 106.038 27.336ZM128.313 24.816C126.609 26.496 124.545 27.336 122.121 27.336C119.697 27.336 117.633 26.496 115.929 24.816C114.249 23.112 113.409 21.048 113.409 18.6C113.409 16.152 114.249 14.088 115.929 12.408C117.633 10.704 119.697 9.864 122.121 9.864C124.545 9.864 126.609 10.704 128.313 12.408C130.017 14.088 130.857 16.152 130.857 18.6C130.857 21.048 130.017 23.112 128.313 24.816ZM118.257 22.56C119.289 23.592 120.585 24.096 122.121 24.096C123.657 24.096 124.953 23.592 125.985 22.56C127.017 21.528 127.545 20.208 127.545 18.6C127.545 16.992 127.017 15.672 125.985 14.64C124.953 13.608 123.657 13.08 122.121 13.08C120.585 13.08 119.289 13.608 118.257 14.64C117.225 15.672 116.697 16.992 116.697 18.6C116.697 20.208 117.225 21.528 118.257 22.56ZM145.977 27H142.401L139.017 21.168H136.497V27H133.185V10.2H139.905C141.465 10.2 142.785 10.752 143.865 11.832C144.945 12.912 145.497 14.232 145.497 15.768C145.497 17.856 144.201 19.776 142.257 20.664L145.977 27ZM139.905 13.296H136.497V18.264H139.905C141.153 18.264 142.185 17.136 142.185 15.768C142.185 14.4 141.153 13.296 139.905 13.296Z"
                  fill="#141414"
                />
              </svg>
            </div>
            <div>
              <ul className="flex gap-3">
                <li><img src="../../assets/images/twitter.svg" alt="twitterlogo" /></li>
                <li><img src="../../assets/images/instagram.png" alt="instagram_logo" /></li> 
                <li><img src="../../assets/images/linkend.png" alt="linkend_logo" /></li> 
                <li><img src="../../assets/images/facebook.png" alt="facebook_logo" /></li>

              </ul>
            </div>
          </div>
  
          <div className="right ">
            <div className="grid lg:grid-cols-4 gap-10">
              {foooterText.map((item, index) => {
                return (
                  <div key={index}>
                    <h4 className="font-bold text-xl pb-2 cursor-pointer">
                      {item.heading}
                    </h4>
                    {item.options.map((text, index) => (
                      <p key={index} className="cursor-pointer text-sm leading-6">
                        {text}
                      </p>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Footer;
  