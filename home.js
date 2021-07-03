form.onsubmit = (event) => {
    event.preventDefault()
    try {
        if(fristName.value.length  > 15 || !fristName.value)fristErr.textContent = 'Invalid frist Name'
        else fristErr.textContent = ''
        if(lastName.value.length  > 15 || !lastName.value)lastErr.textContent = 'Invalid last Name'
        else lastErr.textContent = ''
        if(!email.value.includes('@'))errE.textContent = 'Email @ ham kiring'
        else if(!email.value.includes('.'))errE.textContent = 'Email . ham kiring'
        else if(!email.value > 5)errE.textContent = 'Emailga 5ta dan kop harf kiriting'
        else errE.textContent = ''
        if(parol.value.length < 8)errP.textContent = 'Parolni uzunligi 8dan kop bolishi kerak'
        else if(!parol.value.match(/[A-Z]/))errP.textContent = 'Parolda katta harf bolishi kerak'
        else if(!parol.value.match(/[a-z]/))errP.textContent = 'Parolda katta harf bolishi kerak'
        else if(!parol.value.match(/[0-9]/))errP.textContent = 'Parolda number ham bolishi kerak'
        else errP.textContent = ''
        if(parol.value !== parol1.value)errP1.textContent = 'Parollar mos emas'
        else errP1.textContent = ''
        if(!fristErr.textContent && !lastErr.textContent && !errE.textContent && !errP.textContent && !errP1.textContent){
            alert(`Siz ro'yhatdan o'tdingiz`)
        }
    }catch(err){
        
    }
}
