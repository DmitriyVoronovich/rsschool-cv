# Dmitriy Voronovich
****
## My contact info
****
**Address**: Volhi Solamavaj, Grodno, Belarus

**Phone**: +375333821094

**E-mail**: dmitriy.vr20@gmail.ru

**GitHub**: DmitriyVoronovich
## About me
********
My goal is to learn everything new and exciting. I can spend a lot of time doing what interests me. My core strengths are in problem solving and fast learning. I quickly find a common language with new people. I have experience of teamwork, because during my studies at the university I often had to work on various projects.
## Skills
* HTML5, CSS3
* JavaScript Basics
* Git, GitHub
* VS Code
## Code example
*******
**Task**: Given two arrays of strings ***a1*** and ***a2*** return a sorted array ***r*** in lexicographical order of the strings of ***a1*** which are substrings of strings of ***a2***.
```aidl
function inArray(array1,array2){
    let newArray = [];
    for (let i = 0; i < array2.length; i++) {
        for (let j = 0; j < array1.length; j++) {
            if (array2[i].includes(array1[j])) {
                newArray.push(array1[j]);
            }
        }
    }
    return newArray.sort().filter((val, ind, arr) => arr.indexOf(val) === ind);
  }
```
## Education
****
**Courses**:
* HTML Academy
* Udemy (JavaScript+React  in progress)
## Languages
*******
**Russian** - native speaker

**English** - A2 (B1 in process)