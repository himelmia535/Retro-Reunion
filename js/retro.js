
const newMenu = document.getElementById("title-menu");
const discussPostContainer = async (searchText, isLoading) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
  const data = await res.json();
  const dataAll = data.posts;
  console.log(dataAll);
  letDiscuss(dataAll, isLoading);
  // console.log(data.);
};
const letDiscuss = (dataAll) => {
  // console.log(letDiscuss);

  const cardContainer = document.getElementById("discussContainer");

  // clear
  discussContainer.textContent = "";

  dataAll.forEach((data) => {
    console.log(data);
    // 1 create a div
    const humanCard = document.createElement("div");
    humanCard.classList = `mulish mt-12 grid grid-cols-2  gap-96`;
    humanCard.innerHTML = `
        <div class="hero rounded-3xl w-[772px] gap-1 bg-[#F3F3F5]">
        <div class="p-10">
          <figure class="absolute ">
            <div class="pl-14">
                <div class="absolute w-[15px] rounded-2xl ${data.isActive? "bg-green-600":"bg-red-600"} h-[15px]"></div>
            </div>
            <img src="${data.image}" class=" bg-white rounded-2xl border-red-600 h-[72px] w-[72px] "/>
          </figure>

         <div class="pl-24">
            <div class="flex gap-5">
                <div class="text-[14px] text-[#12132DCC]"> # ${data.category}</div>
                <div class="text-[14px] text-[#12132DCC]">Author : ${data.author.name} </div>
            </div>
            <h1 class="text-xl pt-3 text-[#12132D] font-bold">${data.title}</h1>
            <p class="py-6 text-[#12132D99] text-[16px]">${data.description}</p>
            <div class="border w-full border-dashed border-[#12132D40]"></div>
            <div class="flex justify-between pt-5">
                <div class="flex gap-6">
                    <div class="flex gap-2">
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                           <path d="M9.33333 10.5H18.6667M9.33333 15.1666H16.3333M10.5 21H7C6.07174 21 5.1815 20.6312 4.52513 19.9748C3.86875 19.3185 3.5 18.4282 3.5 17.5V8.16663C3.5 7.23837 3.86875 6.34813 4.52513 5.69175C5.1815 5.03538 6.07174 4.66663 7 4.66663H21C21.9283 4.66663 22.8185 5.03538 23.4749 5.69175C24.1313 6.34813 24.5 7.23837 24.5 8.16663V17.5C24.5 18.4282 24.1313 19.3185 23.4749 19.9748C22.8185 20.6312 21.9283 21 21 21H17.5L14 24.5L10.5 21Z" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </div>
                        <div class="font-bold text-[#12132D99]">${data.comment_count}</div>
                    </div>
                    <div class="flex gap-2">
                        <div class="text-[#12132D99]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path d="M11.6667 14C11.6667 14.6188 11.9125 15.2123 12.3501 15.6499C12.7877 16.0875 13.3812 16.3333 14 16.3333C14.6188 16.3333 15.2123 16.0875 15.6499 15.6499C16.0875 15.2123 16.3333 14.6188 16.3333 14C16.3333 13.3812 16.0875 12.7877 15.6499 12.3501C15.2123 11.9125 14.6188 11.6667 14 11.6667C13.3812 11.6667 12.7877 11.9125 12.3501 12.3501C11.9125 12.7877 11.6667 13.3812 11.6667 14Z" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M24.5 14C21.7 18.6667 18.2 21 14 21C9.8 21 6.3 18.6667 3.5 14C6.3 9.33333 9.8 7 14 7C18.2 7 21.7 9.33333 24.5 14Z" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="font-bold text-[#12132D99]">${data.view_count}
                        </div>
                        </div>
                    <div class="flex gap-2">
                        <div class="text-[#12132D99]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path d="M9.91667 14H14V8.16667M3.5 14C3.5 15.3789 3.77159 16.7443 4.29926 18.0182C4.82694 19.2921 5.60036 20.4496 6.57538 21.4246C7.55039 22.3996 8.70791 23.1731 9.98182 23.7007C11.2557 24.2284 12.6211 24.5 14 24.5C15.3789 24.5 16.7443 24.2284 18.0182 23.7007C19.2921 23.1731 20.4496 22.3996 21.4246 21.4246C22.3996 20.4496 23.1731 19.2921 23.7007 18.0182C24.2284 16.7443 24.5 15.3789 24.5 14C24.5 12.6211 24.2284 11.2557 23.7007 9.98182C23.1731 8.70791 22.3996 7.55039 21.4246 6.57538C20.4496 5.60036 19.2921 4.82694 18.0182 4.29927C16.7443 3.77159 15.3789 3.5 14 3.5C12.6211 3.5 11.2557 3.77159 9.98182 4.29927C8.70791 4.82694 7.55039 5.60036 6.57538 6.57538C5.60036 7.55039 4.82694 8.70791 4.29926 9.98182C3.77159 11.2557 3.5 12.6211 3.5 14Z" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                        </div>
                        <div class="font-bold text-[#12132D99] text-[16px]">${data.posted_time} min</div>
                    </div>
                </div>

                <button onclick="myData('${data.title}',${data.view_count})" class="text-[#10B981]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <g clip-path="url(#clip0_57_425)">
                          <path d="M13.9998 0C6.26805 0 9.15527e-05 6.26814 9.15527e-05 13.9999C9.15527e-05 21.7314 6.26805 28 13.9998 28C21.7315 28 27.9999 21.7314 27.9999 13.9999C27.9999 6.26814 21.7315 0 13.9998 0ZM14 4.91741L22.2847 10.0835H5.71542L14 4.91741ZM22.3879 18.333H22.3871C22.3871 19.1616 21.7155 19.8331 20.887 19.8331H7.1131C6.28447 19.8331 5.61303 19.1615 5.61303 18.333V10.4122C5.61303 10.3245 5.62199 10.2393 5.63655 10.1556L13.552 15.0914C13.5617 15.0975 13.5721 15.1016 13.5821 15.1072C13.5925 15.113 13.6032 15.1186 13.6138 15.1239C13.6697 15.1527 13.7273 15.176 13.7862 15.1912C13.7923 15.1929 13.7983 15.1936 13.8044 15.195C13.869 15.2102 13.9344 15.2197 13.9998 15.2197H14.0002C14.0007 15.2197 14.0012 15.2197 14.0012 15.2197C14.0665 15.2197 14.1319 15.2105 14.1965 15.195C14.2026 15.1935 14.2086 15.1929 14.2147 15.1912C14.2735 15.176 14.3309 15.1527 14.3871 15.1239C14.3977 15.1186 14.4084 15.113 14.4188 15.1072C14.4287 15.1016 14.4392 15.0975 14.4489 15.0914L22.3644 10.1556C22.3789 10.2393 22.3879 10.3244 22.3879 10.4122V18.333Z" fill="#10B981"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_57_425">
                            <rect width="28" height="28" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                </button>

            </div>
          </div>
        </div>
      </div>


        `;

    //
    cardContainer.appendChild(humanCard);
  });
  toggleLoadingSpinner(false);


};

let num = 0;
const myData = (titel, view) => {
  num++
  document.getElementById("newNumber").innerHTML = num;
  const div = document.createElement('div');
      div.classList.add("newPostss");
      div.innerHTML = `
      <div class="flex justify-between mx-6">
      <h3>${titel}</h3>
    <div>
      <div class="flex gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M11.6667 14C11.6667 14.6188 11.9125 15.2123 12.3501 15.6499C12.7877 16.0875 13.3812 16.3333 14 16.3333C14.6188 16.3333 15.2123 16.0875 15.6499 15.6499C16.0875 15.2123 16.3333 14.6188 16.3333 14C16.3333 13.3812 16.0875 12.7877 15.6499 12.3501C15.2123 11.9125 14.6188 11.6667 14 11.6667C13.3812 11.6667 12.7877 11.9125 12.3501 12.3501C11.9125 12.7877 11.6667 13.3812 11.6667 14Z" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M24.5 14C21.7 18.6667 18.2 21 14 21C9.8 21 6.3 18.6667 3.5 14C6.3 9.33333 9.8 7 14 7C18.2 7 21.7 9.33333 24.5 14Z" stroke="#12132D" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p>${view}</p>
      </div>
    </div>
      
     
    </div>
      `;
      newMenu.appendChild(div);
}


// handle search button
const handleSearch = () => {
  toggleLoadingSpinner(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  console.log(searchText);
  discussPostContainer(searchText);

  // console.log('handle search');
};


// <<<<<<<<>>>>>>>>>
const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById("loading-spinner");
  loadingSpinner.classList.remove('hidden');
  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
  } else {
    loadingSpinner.classList.add("hidden");
  }
};

//


discussContainer();