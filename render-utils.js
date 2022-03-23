export function renderCryptids(cryptid){

    const cryptidDiv = document.createElement('div');
    cryptidDiv.classList.add('cryptid-card');

    const cryptidName = document.createElement('p');
    const cryptidImage = document.createElement('img');
    const a = document.createElement('a');

    cryptidName.textContent = cryptid.name;
    cryptidImage.src = cryptid.image;
    a.href = `./details/?id=${cryptid.id}`;
    console.log(a.href);

    cryptidDiv.append(cryptidName, cryptidImage);

    a.append(cryptidDiv);

    return a;

}

export function renderCryptidDetails(cryptid){

    const cryptidDiv = document.createElement('div');
    cryptidDiv.classList.add('cryptid-details');

    const cryptidName = document.createElement('p');
    const cryptidImage = document.createElement('img');


    cryptidName.textContent = cryptid.name;
    cryptidImage.src = cryptid.image;

    cryptidDiv.append(cryptidImage, cryptidName);
 


    return cryptidDiv;

}