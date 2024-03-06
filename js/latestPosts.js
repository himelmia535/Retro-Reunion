const latestContainer = async() =>{
    const res =await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
    const data =await res.json();
    // console.log(data);
    const allData2 = data;
    console.log(allData2);
    postContent(allData2);
  }
  
  const postContent = (allData2) =>{
    const latestCard =document.getElementById('latestPostsContainer');
    allData2.forEach((postData) =>{
      // console.log(postData)
      const div3 =document.createElement('div');
      div3.classList = "card border shadow-xl";
      div3.innerHTML = `
      <figure><img class="m-6 w-[326px] h-[190px] border rounded-3xl" src="${postData.cover_image}" /></figure>
                  <div class="card-body">
                      <div class="flex gap-3">
                          <img class="" src="images/Frame.svg" alt="">
                          <p class="text-[#12132D99] font-bold text-[18px]">${postData.author.posted_date}</p>
                      </div>
                    <h2 class="card-title text-[#12132D]">${postData.title}</h2>
                    <p class="text-[#12132D99] text-[16px]">${postData.description}</p>
                    <div class="card-actions">
                      <div>
                          <img class=" h-11 w-11 rounded-[50%]" src="${postData.profile_image}" alt="">
                      </div>
                      <div>
                          <p class="text-[#12132D] font-bold text-[16px]">${postData.author.designation}</p>
                          <p class="text-[#12132D] text-[14px]">${postData.author.name}</p>
                      </div>
                    </div>
                  </div>
      `;
      latestCard.appendChild(div3)
    })
  } 
  latestContainer()

  