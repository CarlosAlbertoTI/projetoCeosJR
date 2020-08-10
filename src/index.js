// image preview
let reader = new FileReader();
let loadFile = function (event) {
  event.preventDefault()
  reader.onload = function () {
    let output = document.getElementById("image_preview")
    let image_modal = document.getElementById('image-info')
    output.src = reader.result;
    image_modal.src = reader.result
  };
  reader.readAsDataURL(event.target.files[0]);
};



//modal

function addData(infoData){
    for (const key in infoData) {
        if(key == 'cor'){
            document.getElementById(`${key}_id`).style.backgroundColor = infoData[key]
            continue
        }
        document.getElementById(`${key}_id`).innerText = infoData[key]
    }
}

function createModal(data) {
        addData(data)
        document.getElementById('image-info').style.border = `2px solid ${data.cor}`
        document.getElementById('modal').style.border = `5px solid ${data.cor}`
        document.getElementById('modal').style.transitionDuration = '500ms'
        document.getElementById('modal').style.display = 'flex '
}

// validação dos campos

function getData() {
  let motivo = document.getElementsByTagName("textarea")[0].value;
  let name = document.getElementById("nome").value;
  let especie = document.getElementById("especie").value;
  let idade = document.getElementById("idade").value;
  let galac = document.getElementById("idGala").value;
  let salario = document.getElementById("salario").value;
  let cor = document.getElementById("color").value;
  let exp = document.getElementById("experiencia").value;
  
  return {
    name,
    motivo,
    especie,
    idade,
    galac,
    salario,
    cor,
    exp,
  };
}

function validate(data) {
  if (data.especie.length < 3) {
    alert(
      "Nao ha registros dessa especie, por favor,escreva o nome da sua especie corretamente"
    );
    return false;
  }

  if (Number(data.idade) < 18) {
    alert("É permitido se alistar apenas quem è maior de 18 anos");
    return false;
  }

  if (Number(data.salario) < 1000) {
    alert("So e permitido valores abaixo de 1000 creditos galacticos");
    return false;
  }

  if (data.motivo.length < 9) {
    return false;
    alert("No minino 10 caracteres");
  }
  return true;
}

function validationData(event) {
  event.preventDefault();
  let data = getData();

  if (
    data.name == "" ||
    data.especie == "" ||
    data.idade == "" ||
    data.galac == "" ||
    data.salario == "" ||
    data.cor == "" ||
    data.exp == "" ||
    data.motivo == ""
  ) {
    alert(
      "Existe campos vazios, por favor preencha completamente o formulario."
    );
  } else {
    if (validate(data)) {
      createModal(data);
    }
  }
}

document.getElementById("btn-submit").addEventListener("click", validationData);
