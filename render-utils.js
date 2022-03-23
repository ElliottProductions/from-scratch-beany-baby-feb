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

    const cryptidName = document.createElement('h3');
    const cryptidImage = document.createElement('img');
    const cryptidAKA = document.createElement('ol');
    const cryptidRange = document.createElement('p');
    const cryptidSighting = document.createElement('p');
    const cryptidDangerous = document.createElement('p');
    const cryptidType = document.createElement('p');
    const cryptidPhenom = document.createElement('p');

    cryptidName.textContent = cryptid.name;
    cryptidImage.src = cryptid.image;
    
    const akaIntro = document.createElement('p');
    akaIntro.textContent = 'Also Known As:';
    cryptidAKA.append(akaIntro);
    cryptidAKA.classList.add('aka-box');
    for (let aka of cryptid.aka) {
        const akaEl = document.createElement('li');
        akaEl.textContent = aka;

        cryptidAKA.append(akaEl);
    }
    //cryptidAKA.textContent = `AKA: ${cryptid.aka[0]}`;
    cryptidRange.textContent = `Range: ${cryptid.range}.`;
    cryptidSighting.textContent = `First recorded mention: ${cryptid.sightings} A.D.`;
    let isDanger = 'Unknown';
    if (cryptid.dangerous === true){
        isDanger = 'Yes';
    }
    cryptidType.textContent = `Type: ${cryptid.type}`;
    cryptidDangerous.textContent = `Dangerous to humans: ${isDanger}.`;
    cryptidPhenom.textContent = `Known for: ${cryptid.phenom}`;

    cryptidDiv.append(cryptidImage, cryptidName, akaIntro, cryptidAKA, cryptidType, cryptidRange, cryptidDangerous, cryptidPhenom);
 


    return cryptidDiv;

}