const toggle = (event, tab) => {
  const tab_contents = document.getElementsByClassName("content-1");

  for (i = 0; i < tab_contents.length; i++) {
    tab_contents[i].style.display = "none";
  }
  console.log(event, "working");

  const button = document.getElementsByClassName("tab");
  for (i = 0; i < button.length; i++) {
    button[i].className = button[i].className.replace("active", "");
  }

  document.getElementById(tab).style.display = "block";
  event.currentTarget.className += "active";
  console.log(event.currentTarget);
};

// const tab1 = ["Base Component ", "Header", "Hero", "Content", "Blog"];

const tab1_content = document.getElementById("tab-1");
tab1_content.innerHTML = `<li id="selected" class="">
                <span>Base Component</span>
                <div class="search">
                  <i class="fa-solid fa-magnifying-glass"></i
                  ><input type="text" placeholder="search" /><i
                    class="fa-solid fa-xmark"
                  ></i>
                </div>
              </li>
              <li>
                <i class="fa-regular fa-square-minus" id="inner-icon"></i>
                <div class="tab-detail">
                  <span>Header</span><i class="fa-solid fa-greater-than"></i>
                </div>
              </li>
              <li>
                <i class="fa-regular fa-square-plus" id="inner-icon"></i>
                <div class="tab-detail">
                  <span>Hero</span>
                  <i class="fa-solid fa-greater-than"></i>
                </div>
              </li>
              <li>
                <i class="fa-solid fa-table-list" id="inner-icon"></i>
                <div class="tab-detail">
                  <span>Content</span>
                  <i class="fa-solid fa-greater-than"></i>
                </div>
              </li>
              <li>
                <i class="fa-solid fa-border-all" id="inner-icon"></i>
                <div class="tab-detail">
                  <span>Feature</span>
                  <i class="fa-solid fa-greater-than"></i>
                </div>
              </li>
              <li>
                <i class="fa-solid fa-border-all" id="inner-icon"></i>
                <div class="tab-detail">
                  <span>Form</span>
                  <i class="fa-solid fa-greater-than"></i>
                </div>
              </li>
              <li>
                <i class="fa-solid fa-tablet-screen-button" id="inner-icon"></i>
                <div class="tab-detail">
                  <span>Application</span>
                  <i class="fa-solid fa-greater-than"></i>
                </div>
              </li>
              <li>
                <i class="fa-solid fa-eye" id="inner-icon"></i>
                <div class="tab-detail">
                  <span>Showcase</span>
                  <i class="fa-solid fa-greater-than"></i>
                </div>
              </li>
              <li>
                <i class="fa-solid fa-bag-shopping" id="inner-icon"></i>
                <div class="tab-detail">
                  <span>Ecommerce</span>
                  <i class="fa-solid fa-greater-than"></i>
                </div>
              </li>
              <li>
                <i class="fa-solid fa-arrow-pointer" id="inner-icon"></i>
                <div class="tab-detail">
                  <span>Call to Action</span>
                  <i class="fa-solid fa-greater-than"></i>
                </div>
              </li>
              <li>
                <i class="fa-solid fa-microscope" id="inner-icon"></i>
                <div class="tab-detail">
                  <span>Testimonials</span>
                  <i class="fa-solid fa-greater-than"></i>
                </div>
              </li>
              <li>
                <i class="fa-solid fa-money-check-dollar" id="inner-icon"></i>
                <div class="tab-detail">
                  <span>Pricing</span>
                  <i class="fa-solid fa-greater-than"></i>
                </div>
              </li>
              <li>
                <i class="fa-solid fa-people-group" id="inner-icon"></i>
                <div class="tab-detail">
                  <span>Team</span>
                  <i class="fa-solid fa-greater-than"></i>
                </div>
              </li>
              <li>
                <i class="fa-solid fa-address-book" id="inner-icon"></i>
                <div class="tab-detail">
                  <span>Contact</span>
                  <i class="fa-solid fa-greater-than"></i>
                </div>
              </li>

              <li>
                <i class="fa-solid fa-tag" id="inner-icon"></i>
                <div class="tab-detail">
                  <span>Footer</span>
                  <i class="fa-solid fa-greater-than"></i>
                </div>
              </li>`;

const tab2_content = document.getElementById("tab-2");
tab2_content.innerHTML = `<li>
<i class="fa-solid fa-border-all" id="inner-icon"></i>
<div class="tab-detail">
  <span>Caleb</span>
  <i class="fa-solid fa-greater-than"></i>
</div>
</li>
<li>
<i class="fa-solid fa-tablet-screen-button" id="inner-icon"></i>
<div class="tab-detail">
  <span>Sylvester</span>
  <i class="fa-solid fa-greater-than"></i>
</div>
</li>
<li>
<i class="fa-solid fa-eye" id="inner-icon"></i>
<div class="tab-detail">
  <span>Korede</span>
  <i class="fa-solid fa-greater-than"></i>
</div>
</li>
<li>
<i class="fa-solid fa-bag-shopping" id="inner-icon"></i>
<div class="tab-detail">
  <span>Dayo</span>
  <i class="fa-solid fa-greater-than"></i>
</div>
</li>
<li>
<i class="fa-solid fa-arrow-pointer" id="inner-icon"></i>
<div class="tab-detail">
  <span>Ali</span>
  <i class="fa-solid fa-greater-than"></i>
</div>
</li>
<li>
<i class="fa-solid fa-microscope" id="inner-icon"></i>
<div class="tab-detail">
  <span>Paul</span>
  <i class="fa-solid fa-greater-than"></i>
</div>
</li>
<li>
<i class="fa-solid fa-money-check-dollar" id="inner-icon"></i>
<div class="tab-detail">
  <span>Dumebi</span>
  <i class="fa-solid fa-greater-than"></i>
</div>
</li>
<li>
<i class="fa-solid fa-people-group" id="inner-icon"></i>
<div class="tab-detail">
  <span>Nimota</span>
  <i class="fa-solid fa-greater-than"></i>
</div>
</li>
<li>
<i class="fa-solid fa-address-book" id="inner-icon"></i>
<div class="tab-detail">
  <span>Contact</span>
  <i class="fa-solid fa-greater-than"></i>
</div>
</li>
<li>
<i class="fa-solid fa-tag" id="inner-icon"></i>
<div class="tab-detail">
  <span>Footer</span>
  <i class="fa-solid fa-greater-than"></i>
</div>
</li>`;

const tab3_content = document.getElementById("tab-3");
tab3_content.innerHTML = `  <li>
<i class="fa-solid fa-border-all" id="inner-icon"></i>
<div class="tab-detail">
  <span>Caleb</span>
  <i class="fa-solid fa-greater-than"></i>
</div>
</li>
<li>
<i class="fa-solid fa-tablet-screen-button" id="inner-icon"></i>
<div class="tab-detail">
  <span>Sylvester</span>
  <i class="fa-solid fa-greater-than"></i>
</div>
</li>
<li>
<i class="fa-solid fa-eye" id="inner-icon"></i>
<div class="tab-detail">
  <span>Korede</span>
  <i class="fa-solid fa-greater-than"></i>
</div>
</li>`;

const tab4_content = document.getElementById("tab-4");
tab4_content.innerHTML = `<li><h3>Tab 4</h3></li>`;

const tab5_content = document.getElementById("tab-5");
tab5_content.innerHTML = `<li><h3>Tab 5</h3></li>`;

const tab6_content = document.getElementById("tab-6");
tab6_content.innerHTML = `<li><h3>Tab 6</h3></li>`;
