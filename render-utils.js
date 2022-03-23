export function renderCryptids(cryptid){

    const cryptidDiv = document.createElement('div');
    cryptidDiv.classList.add('cryptid-card');

    const cryptidName = document.createElement('p');
    const cryptidImage = document.createElement('img');

    cryptidName.textContent = cryptid.name;
    cryptidImage.src = cryptid.image;

    cryptidDiv.append(cryptidName, cryptidImage);

    return cryptidDiv;

}