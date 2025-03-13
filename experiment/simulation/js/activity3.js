function activity3() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Calculate discharge by using given data </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act3();' id='temp-btn-5' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function start_act3() {
    let temp_btn = document.getElementById('temp-btn-5');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate Discharge", "tb3-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb3-box'>
        <p style="font-size: 24px; font-weight: 600; text-align: center">Activity 3</p> <br>
        <h5> Find the discharge using the following given data.</h5>
        <h5>H<sub>1</sub> = ${act3_h1}, H<sub>2</sub> = ${act3_h2}, L = ${act3_l}, d = ${act3_d}, f = ${act3_f} </h5>
        <br>
        <div style='text-align: center;'><img style='width: 50%;' src='./images/activity3.png'></div>
        <br>

        <h5>Using Bernoulli's equation between Point 1 and 2</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ H_1 = H_2 + h_i + h_f + h_o\\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ ...eq\\ 1 $$
            </span>
        </p>

        
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ h_i = Entrance\\ loss $$
                $$ h_i = \\frac{0.5 v^2}{2 g} $$
                $$ h_f = Friction\\ loss $$
                $$ h_f = \\frac{4 f L v^2}{2 g d} $$
                $$ h_o = Outlet loss $$
                $$ h_o = \\frac{v^2}{2 g} $$
                $$ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ ... eq\\ 2 $$
            </span>
        </p>

        <h5>Using eq 2 into eq 1, find v</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ v = $$
            </span>
            <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal09-inp'> <span id='cal09-val-sp'></span> m/s
        </p>

        <h5>Discharge is given by</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ Q = Av $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal10-inp'> <span id='cal10-val-sp'></span> m<sup>3</sup>/s = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal11-inp'> <span id='cal11-val-sp'></span> litre/s
        </p>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify2();'  id='temp-btn-6' >Verify</button></div>

    </div>

    `;
    maindiv.innerHTML += text;
    internal_calculations2();
    setTimeout(() => { show_step('tb3-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations2() {
    act3_a = (Math.PI / 4) * Math.pow(act3_d, 2);
    act3_v = Math.sqrt((act3_h1 - act3_h2) / (((1.5 / (2 * g)) + ((4 * act3_f * act3_l) / (2 * g * act3_d)))));
    act3_Q = act3_a * act3_v;
    act3_Q_lit = act3_Q * 1000;
}
function verify2() {
    let btn = document.getElementById('temp-btn-6');
    console.log("act3 a = ", act3_a);
    console.log("act3 v = ", act3_v);
    console.log("act3 Q = ", act3_Q);
    console.log("act3 Q in litre = ", act3_Q_lit);
    let inp1 = document.getElementById('cal09-inp');
    let sp1 = document.getElementById('cal09-val-sp');
    let inp2 = document.getElementById('cal10-inp');
    let sp2 = document.getElementById('cal10-val-sp');
    let inp3 = document.getElementById('cal11-inp');
    let sp3 = document.getElementById('cal11-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp1.value).toFixed(2)), parseFloat(act3_v.toFixed(2)))) {
        alert('V is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp2.value).toFixed(2)), parseFloat(act3_Q.toFixed(2)))) {
        alert('Discharge is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp3.value).toFixed(2)), parseFloat(act3_Q_lit.toFixed(2)))) {
        alert('Discharge in litres is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(act3_v).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(act3_Q).toFixed(4)}`;
    inp3.remove();
    sp3.innerText = `${(act3_Q_lit).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    exp_complete();
}
function exp_complete() {
    // let btn: HTMLButtonElement = <HTMLButtonElement>(
    // 	document.getElementById('temp-btn-8')
    // );
    // btn && btn.remove();
    alert('Experiment completed');
}
//# sourceMappingURL=activity3.js.map