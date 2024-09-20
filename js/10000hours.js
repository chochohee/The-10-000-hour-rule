//Modal

const dialog = document.getElementById("dialog");
const showModalBtn = document.getElementById("go-btn");
const closeBtn = document.getElementById("closeBtn");

showModalBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});

//Form

const fm = document.forms.myForm;
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");

fm.addEventListener("submit", (e) => {
  e.preventDefault();
  let dream = input1.value;
  let training = parseInt(input2.value);
  let hour = 10000 / training;

  if (input1.value === "" || input2.value === "") {
    window.alert("입력하지 않은곳이 없는지 확인하세요.");
    return;
  } else if (isNaN(input2.value)) {
    window.alert("시간값의 숫자를 확인하세요.");
    return;
  } else if (training > 24) {
    window.alert("하루는 24시간이랍니다.");
    return;
  }

  text1.textContent = dream;
  text2.textContent = Math.floor(hour);
});
