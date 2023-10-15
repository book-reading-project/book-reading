// review star function 
function star1() {
    document.getElementById("star1").classList.add = ("orange")
    document.getElementById("star2").style.color = ""
    document.getElementById("star3").style.color = ""
    document.getElementById("star4").style.color = ""
    document.getElementById("star5").style.color = ""
}
function star2() {
    document.getElementById("star1").style.color = "orange"
    document.getElementById("star2").style.color = "orange"
    document.getElementById("star3").style.color = ""
    document.getElementById("star4").style.color = ""
    document.getElementById("star5").style.color = ""
}
function star3() {
    document.getElementById("star1").style.color = "orange"
    document.getElementById("star2").style.color = "orange"
    document.getElementById("star3").style.color = "orange"
    document.getElementById("star4").style.color = ""
    document.getElementById("star5").style.color = ""
}
function star4() {
    document.getElementById("star1").style.color = "orange"
    document.getElementById("star2").style.color = "orange"
    document.getElementById("star3").style.color = "orange"
    document.getElementById("star4").style.color = "orange"
    document.getElementById("star5").style.color = ""
}
function star5() {
    document.getElementById("star1").style.color = "orange"
    document.getElementById("star2").style.color = "orange"
    document.getElementById("star3").style.color = "orange"
    document.getElementById("star4").style.color = "orange"
    document.getElementById("star5").style.color = "orange"
}
// end function 

// Detils book fatch function

function detels_book() {
    fetch("http://localhost:3000/mydata/60")
      .then(response => response.json())
      .then(data => {
          
      
  
          const cards = document.getElementById('details_hero');
        
              
              const card = document.createElement('div');
              card.classList.add('row'); 

            if (data.rate==1) {
                card.innerHTML = `
              
          


                <div class="col-md-4">
                    <div class="hero-image">
                        <img src="${data.image}" alt="" id="bookimg">
                     </div>
                </div>
                <div class="col-md-8">
                    <div class="col-md-12 col-sm-12">
                        <div class="block wow fadeInLeft animated">
                            <h3 style="margin-bottom: 20px; margin-top: 20px;margin-left: 100px;">
                            ${data.title}
                            </h3>
                            <h4 style="margin-bottom: 20px; margin-top: 20px;margin-left: 100px;">
                               ${data.author}
                                </h4>
                                
                               <div style="margin-left: 100px;">
                                <a class="fa fa-star checked"  style="text-decoration: none;"></a>
        <span class="fa fa-star "  ></span>
        <span class="fa fa-star "  ></span>
        <span class="fa fa-star " > </span>
        <span class="fa fa-star"  ></span>
                               </div>
                                <h6 style="margin-bottom: 25px; margin-top: 20px; text-align: left;margin-left: 100px;" >
                                    ${data.description}
                                    </h6>
                                    <h6 style="margin-bottom: 50px; margin-top: 20px;margin-left: 100px;">
                                       language : English
                                        </h6>
                                        <h6 style="margin-bottom: 50px; margin-top: 20px;margin-left: 100px;">
                                        Category : ${data.category}
                                        </h6>
                            
                        </div>
                        <div style="margin-left: 100px; margin-top: 100px;">
                        <button id="${data.id}" style="border-radius: 100px; width: 100px;" onclick="addlist(this)"> WishList </button>
                        <button  style="border-radius: 100px; width: 100px; margin-left: 20px;">  Download  </button>
                    </div>
                    </div>
                   
                </div>
                </div>
        
          
        
                         
                      `;
                      cards.appendChild(card);
            }
            else if(data.rate==2){
                card.innerHTML = `
              
          


                <div class="col-md-4">
                    <div class="hero-image">
                        <img src="${data.image}" alt="" id="bookimg">
                     </div>
                </div>
                <div class="col-md-8">
                    <div class="col-md-12 col-sm-12">
                        <div class="block wow fadeInLeft animated">
                            <h3 style="margin-bottom: 20px; margin-top: 20px;margin-left: 100px;">
                            ${data.title}
                            </h3>
                            <h4 style="margin-bottom: 20px; margin-top: 20px;margin-left: 100px;">
                               ${data.author}
                                </h4>
                               
                               <div style="margin-left: 100px;">
                                <a class="fa fa-star checked"  style="text-decoration: none;"></a>
        <span class="fa fa-star checked"  ></span>
        <span class="fa fa-star  "  ></span>
        <span class="fa fa-star " > </span>
        <span class="fa fa-star"  ></span>
                               </div>
                                <h6 style="margin-bottom: 25px; margin-top: 20px; text-align: left;margin-left: 100px;" >
                                    ${data.description}
                                    </h6>
                                    <h6 style="margin-bottom: 50px; margin-top: 20px;margin-left: 100px;">
                                       language : English
                                        </h6>
                                        <h6 style="margin-bottom: 50px; margin-top: 20px;margin-left: 100px;">
                                        Category : ${data.category}
                                        </h6>
                            
                        </div>
                        <div style="margin-left: 100px; margin-top: 100px;">
                        <button id="${data.id}" style="border-radius: 100px; width: 100px;" onclick="addlist(this)"> WishList </button>
                        <button  style="border-radius: 100px; width: 100px; margin-left: 20px;">  Download  </button>
                    </div>
                    </div>
                   
                </div>
                </div>
        
          
        
                         
                      `;
                      cards.appendChild(card);

            }
            else if (data.rate==3) {
                
                card.innerHTML = `
              
          


                <div class="col-md-4">
                    <div class="hero-image">
                        <img src="${data.image}" alt="" id="bookimg">
                     </div>
                </div>
                <div class="col-md-8">
                    <div class="col-md-12 col-sm-12">
                        <div class="block wow fadeInLeft animated">
                            <h3 style="margin-bottom: 20px; margin-top: 20px;margin-left: 100px;">
                            ${data.title}
                            </h3>
                            <h4 style="margin-bottom: 20px; margin-top: 20px;margin-left: 100px;">
                               ${data.author}
                                </h4>
                               
                               <div style="margin-left: 100px;">
                                <a class="fa fa-star checked"  style="text-decoration: none;"></a>
        <span class="fa fa-star checked"  ></span>
        <span class="fa fa-star checked "  ></span>
        <span class="fa fa-star " > </span>
        <span class="fa fa-star"  ></span>
                               </div>
                                <h6 style="margin-bottom: 25px; margin-top: 20px; text-align: left;margin-left: 100px;" >
                                    ${data.description}
                                    </h6>
                                    <h6 style="margin-bottom: 50px; margin-top: 20px;margin-left: 100px;">
                                       language : English
                                        </h6>
                                        <h6 style="margin-bottom: 50px; margin-top: 20px;margin-left: 100px;">
                                        Category : ${data.category}
                                        </h6>
                            
                        </div>
                        <div style="margin-left: 100px; margin-top: 100px;">
                        <button id="${data.id}" style="border-radius: 100px; width: 100px;" onclick="addlist(this)"> WishList </button>
                        <button  style="border-radius: 100px; width: 100px; margin-left: 20px;">  Download  </button>
                    </div>
                    </div>
                   
                </div>
                </div>
        
          
        
                         
                      `;
                      cards.appendChild(card);
            }
            else if (data.rate==4) {
                
                card.innerHTML = `
              
          


                <div class="col-md-4">
                    <div class="hero-image">
                        <img src="${data.image}" alt="" id="bookimg">
                     </div>
                </div>
                <div class="col-md-8">
                    <div class="col-md-12 col-sm-12">
                        <div class="block wow fadeInLeft animated">
                            <h3 style="margin-bottom: 20px; margin-top: 20px;margin-left: 100px;">
                            ${data.title}
                            </h3>
                            <h4 style="margin-bottom: 20px; margin-top: 20px;margin-left: 100px;">
                               ${data.author}
                                </h4>
                               
                               <div style="margin-left: 100px;">
                                <a class="fa fa-star checked"  style="text-decoration: none;"></a>
        <span class="fa fa-star checked"  ></span>
        <span class="fa fa-star checked "  ></span>
        <span class="fa fa-star checked " > </span>
        <span class="fa fa-star"  ></span>
                               </div>
                                <h6 style="margin-bottom: 25px; margin-top: 20px; text-align: left;margin-left: 100px;" >
                                    ${data.description}
                                    </h6>
                                    <h6 style="margin-bottom: 50px; margin-top: 20px;margin-left: 100px;">
                                       language : English
                                        </h6>
                                        <h6 style="margin-bottom: 50px; margin-top: 20px;margin-left: 100px;">
                                        Category : ${data.category}
                                        </h6>
                            
                        </div>
                        <div style="margin-left: 100px; margin-top: 100px;">
                        <button id="${data.id}" style="border-radius: 100px; width: 100px;" onclick="addlist(this)"> WishList </button>
                        <button  style="border-radius: 100px; width: 100px; margin-left: 20px;">  Download  </button>
                    </div>
                    </div>
                   
                </div>
                </div>
        
          
        
                         
                      `;
                      cards.appendChild(card);
            }
            else if (data.rate==5) {
                card.innerHTML = `
              
          


                <div class="col-md-4">
                    <div class="hero-image">
                        <img src="${data.image}" alt="" id="bookimg">
                     </div>
                </div>
                <div class="col-md-8">
                    <div class="col-md-12 col-sm-12">
                        <div class="block wow fadeInLeft animated">
                            <h3 style="margin-bottom: 20px; margin-top: 20px;margin-left: 100px;">
                            ${data.title}
                            </h3>
                            <h4 style="margin-bottom: 20px; margin-top: 20px;margin-left: 100px;">
                               ${data.author}
                                </h4>
                                
                               <div style="margin-left: 100px;">
                                <a class="fa fa-star checked"  style="text-decoration: none;"></a>
        <span class="fa fa-star checked"  ></span>
        <span class="fa fa-star checked "  ></span>
        <span class="fa fa-star checked" > </span>
        <span class="fa fa-star checked"  ></span>
                               </div>
                                <h6 style="margin-bottom: 25px; margin-top: 20px; text-align: left;margin-left: 100px;" >
                                    ${data.description}
                                    </h6>
                                    <h6 style="margin-bottom: 50px; margin-top: 20px;margin-left: 100px;">
                                       language : English
                                        </h6>
                                        <h6 style="margin-bottom: 50px; margin-top: 20px;margin-left: 100px;">
                                        Category : ${data.category}
                                        </h6>
                            
                        </div>
                        <div style="margin-left: 100px; margin-top: 100px;">
                        <button id="${data.id}" style="border-radius: 100px; width: 100px;" onclick="addlist(this)"> WishList </button>
                        <button  style="border-radius: 100px; width: 100px; margin-left: 20px;">  Download  </button>
                    </div>
                    </div>
                   
                </div>
                </div>
        
          
        
                         
                      `;
                      cards.appendChild(card);
            }
             
          });
      }
  // end render 
 detels_book()
 renderboc()

 function renderboc() {
    fetch("http://localhost:3000/mydata")
      .then(response => response.json())
      .then(data => {
          const products = data;
      
  console.log(products);
          const cards = document.getElementById('card-slader');
          products.slice(0,5).map(product => {
            const card = document.createElement('div');
            
            
               
              card.innerHTML = `
              
           
              <article class="swiper-item card";>
      <!-- Image Source -->
              <img class="card-image"src="${product.image}" ">
            
              <div class="card-header">
                  <a href="#">${product.title}</a><br><br>
                  <button class="icon-button">
      <!-- Bookmark icon// Inline Style -->
                      <svg style="color: #0f294e" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,2H6A1,1,0,0,0,5,3V21a1,1,0,0,0,1.65.76L12,17.27l5.29,4.44A1,1,0,0,0,18,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,19,21V3A1,1,0,0,0,18,2ZM17,18.86,12.64,15.2a1,1,0,0,0-1.28,0L7,18.86V4H17Z" fill="blue"></path></svg>
          
                  </button>
              </div>
              <div class="card-footer">
                  <p>Author: ${product.author}</p>
      
                  
                  
              </div>
          </article>
      
       
                                              
                                  
                                          

        
          
          
              `;
             cards.appendChild(card);
          });
      })
  }
// review section 

function addcom() {
    let comint = document.getElementById("commint").value;

    // Assuming you have a proper class for the stars like "checked" for selected stars
    let rate =  document.querySelectorAll('[style*="color: orange"]').length;

    fetch("http://localhost:3000/commint", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "commint": comint,
            "bookid": 60,
            "rate": rate
        }),
        
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

   const cards= document.getElementById('comrender')
    cards.innerHTML=``;
    render2();
}

function render2() {
    fetch("http://localhost:3000/commint")
      .then(response => response.json())
      .then(data => {
        const products = data.map(item => ({
            commint: item.commint,
            rate: item.rate,
            id: item.id
          }));
      
  console.log(products);
  products.slice(0,3).map(product => {
          const cards = document.getElementById('comrender');
        
              
              const card = document.createElement('div');
             

              
             
              
              if (product.rate==1) {
                card.innerHTML = `
              
              
              <div class="card p-1" style="width: 100%;margin-bottom: 20px;margin-top: 15px;;">
        
              <div class="d-flex justify-content-between align-items-center" style="border:none">

            <div class="user d-flex flex-row" >
              <div>
                  <img src="https://i.imgur.com/hczKIze.jpg" width="50" class="user-img rounded-circle">  
              </div>

              
              <div>
                  <div style="display: flex;flex-direction: row;">
                      <p class="font-weight-bold" style="margin-left: 10px;">  laith alkhraisha </p> 
                      <div style="margin-left: 10px;">
                          <span class="fa fa-star checked"></span>
<span class="fa fa-star "></span>
<span class="fa fa-star "></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
                      </div>
                      
                      
                  </div>
                  
                  
                  <P> ${product.commint} </P>
              </div>

              
                
            </div>

            <button id="${product.id}" style="width: 120px;border-radius: 100px;margin-top: 50px;margin-bottom: 50px;" type="submit"  onclick="updateitem(this)"> Edit </button>
              <button id="${product.id}" style="width: 120px;border-radius: 100px;margin-top: 50px;margin-bottom: 50px;" type="submit"  onclick="deleteItem(this)"> Delete</button>
  
          

            </div>


            
              
          </div>
              `;
              }
              else if (product.rate==2) {
                
                card.innerHTML = `
              
              
                <div class="card p-1" style="width: 100%;margin-bottom: 20px;margin-top: 15px;;">
          
                <div class="d-flex justify-content-between align-items-center" style="border:none">
  
              <div class="user d-flex flex-row" >
                <div>
                    <img src="https://i.imgur.com/hczKIze.jpg" width="50" class="user-img rounded-circle">  
                </div>
  
                
                <div>
                    <div style="display: flex;flex-direction: row;">
                        <p class="font-weight-bold" style="margin-left: 10px;">  laith alkhraisha </p> 
                        <div style="margin-left: 10px;">
                            <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star "></span>
  <span class="fa fa-star"></span>
  <span class="fa fa-star"></span>
                        </div>
                        
                        
                    </div>
                    
                    
                    <P> ${product.commint} </P>
                </div>
  
                
                  
              </div>
  
              <button id="${product.id}" style="width: 120px;border-radius: 100px;margin-top: 50px;margin-bottom: 50px;" type="submit"  onclick="updateitem(this)"> Edit </button>
              <button id="${product.id}" style="width: 120px;border-radius: 100px;margin-top: 50px;margin-bottom: 50px;" type="submit"  onclick="deleteItem(this)"> Delete</button>
  

              </div>
  
  
              
                
            </div>
                `;
              }
              else if (product.rate==3) {
                card.innerHTML = `
              
              
                <div class="card p-1" style="width: 100%;margin-bottom: 20px;margin-top: 15px;;">
          
                <div class="d-flex justify-content-between align-items-center" style="border:none">
  
              <div class="user d-flex flex-row" >
                <div>
                    <img src="https://i.imgur.com/hczKIze.jpg" width="50" class="user-img rounded-circle">  
                </div>
  
                
                <div>
                    <div style="display: flex;flex-direction: row;">
                        <p class="font-weight-bold" style="margin-left: 10px;">  laith alkhraisha </p> 
                        <div style="margin-left: 10px;">
                            <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star"></span>
  <span class="fa fa-star"></span>
                        </div>
                        
                        
                    </div>
                    
                    
                    <P> ${product.commint} </P>
                </div>
  
                
                  
              </div>
  
              <button id="${product.id}" style="width: 120px;border-radius: 100px;margin-top: 50px;margin-bottom: 50px;" type="submit"  onclick="updateitem(this)"> Edit </button>
              <button id="${product.id}" style="width: 120px;border-radius: 100px;margin-top: 50px;margin-bottom: 50px;" type="submit"  onclick="deleteItem(this)"> Delete</button>
  
              </div>
  
  
              
                
            </div>
                `;
              }
              else if (product.rate==4) {
                card.innerHTML = `
              
              
                <div class="card p-1" style="width: 100%;margin-bottom: 20px;margin-top: 15px;;">
          
                <div class="d-flex justify-content-between align-items-center" style="border:none">
  
              <div class="user d-flex flex-row" >
                <div>
                    <img src="https://i.imgur.com/hczKIze.jpg" width="50" class="user-img rounded-circle">  
                </div>
  
                
                <div>
                    <div style="display: flex;flex-direction: row;">
                        <p class="font-weight-bold" style="margin-left: 10px;">  laith alkhraisha </p> 
                        <div style="margin-left: 10px;">
                            <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star  checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star "></span>
                        </div>
                        
                        
                    </div>
                    
                    
                    <P> ${product.commint} </P>
                </div>
  
                
                  
              </div>
  
  
              <button id="${product.id}" style="width: 120px;border-radius: 100px;margin-top: 50px;margin-bottom: 50px;" type="submit"  onclick="updateitem(this)"> Edit </button>
              <button id="${product.id}" style="width: 120px;border-radius: 100px;margin-top: 50px;margin-bottom: 50px;" type="submit"  onclick="deleteItem(this)"> Delete</button>
  
              </div>
  
  
              
                
            </div>
                `;
              }
              else if (product.rates==5) {
                card.innerHTML = `
              
              
                <div class="card p-1" style="width: 100%;margin-bottom: 20px;margin-top: 15px;;">
          
                <div class="d-flex justify-content-between align-items-center" style="border:none">
  
              <div class="user d-flex flex-row" >
                <div>
                    <img src="https://i.imgur.com/hczKIze.jpg" width="50" class="user-img rounded-circle">  
                </div>
  
                
                <div>
                    <div style="display: flex;flex-direction: row;">
                        <p class="font-weight-bold" style="margin-left: 10px;">  laith alkhraisha </p> 
                        <div style="margin-left: 10px;">
                            <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
                        </div>
                        
                        
                    </div>
                    
                    
                    <P> ${product.commint} </P>
                </div>
  
                
                  
              </div>
  
  
              <button id="${product.id}" style="width: 120px;border-radius: 100px;margin-top: 50px;margin-bottom: 50px;" type="submit"  onclick="updateitem(this)"> Edit </button>
              <button id="${product.id}" style="width: 120px;border-radius: 100px;margin-top: 50px;margin-bottom: 50px;" type="submit"  onclick="deleteItem(this)"> Delete</button>
  
              </div>
  
  
              
                
            </div>
                `;
              }
              else {
                card.innerHTML = `
              
              
                <div class="card p-1" style="width: 100%;margin-bottom: 20px;margin-top: 15px;;">
          
                <div class="d-flex justify-content-between align-items-center" style="border:none">
  
              <div class="user d-flex flex-row" >
                <div>
                    <img src="https://i.imgur.com/hczKIze.jpg" width="50" class="user-img rounded-circle">  
                </div>
  
                
                <div>
                    <div style="display: flex;flex-direction: row;">
                        <p class="font-weight-bold" style="margin-left: 10px;">  laith alkhraisha </p> 
                        <div style="margin-left: 10px;">
                            <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
                        </div>
                        
                        
                    </div>
                    
                    
                    <P> ${product.commint} </P>
                </div>
  
                
                  
              </div>
  
  
              <button id="${product.id}" style="width: 120px;border-radius: 100px;margin-top: 50px;margin-bottom: 50px;" type="submit"  onclick="updateitem(this)"> Edit </button>
              <button id="${product.id}" style="width: 120px;border-radius: 100px;margin-top: 50px;margin-bottom: 50px;" type="submit"  onclick="deleteItem(this)"> Delete</button>
  
              </div>
  
  
              
                
            </div>
                `;

              }
             
              cards.appendChild(card);
          });
      });
  }
  render2()
    

  function deleteItem(e) {
    const deletitem=e.id;
    console.log(deletitem);
    fetch(`http://localhost:3000/commint/${deletitem}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            
        },
    })
    const cards= document.getElementById('comrender')
    cards.innerHTML=``;
    render2();
  }
  function updateitem(e) {
    let updateite =e.id;

    
    let tt=document.getElementById("commint").value;
    let rate =  document.querySelectorAll('[style*="color: orange"]').length;
    
    fetch(`http://localhost:3000/commint/${updateite}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify({
            "commint":tt,
            "rate":rate
        
        }),

        
    })
    const cards= document.getElementById('comrender')
    cards.innerHTML=``;
    render2();
  }
  function addlist(e) {
   let bookid=e.id

    fetch("http://localhost:3000/list", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            
            "bookid": bookid,
            
        }),
        
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

   
}