function activity2() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Calculate discharge by using given data </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-3' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function start_act2() {
    let temp_btn = document.getElementById('temp-btn-3');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate Discharge", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>
        <p style="font-size: 24px; font-weight: 600; text-align: center">Activity 2</p> <br>
        <h5> Find the discharge using the following given data</h5>
        <h5>H = ${H}, L<sub>1</sub> = ${l1}, L<sub>2</sub> = ${l2}, d<sub>1</sub> = ${d1}, d<sub>2</sub> = ${d2}, f = ${act2_f} </h5>
        <br>
        <div style='text-align: center;'><img style='width: 30%;' src='./images/activity2.png'></div>
        <br>

        <h5></h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ A_1 = \\frac{\\pi}{4}d_1^2 $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal04-inp'> <span id='cal04-val-sp'></span> m<sup>2</sup>
        </p>

        <h5></h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ A_2 = \\frac{\\pi}{4}d_2^2 $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal05-inp'> <span id='cal05-val-sp'></span> m<sup>2</sup>
        </p>

        <h5>Using continuity equation</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ A_1 v_1 = A_2 v_2 $$
            </span>
        </p>

        <h5>Using Bernoulli's equation between Point 1 and 3</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ H = \\frac{P_2}{\\rho g} + \\frac{v_2^2}{2 g} + h_i + hf_1 + h_e + hf_2\\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ ...eq\\ 1 $$
            </span>
        </p>

        <h5></h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ h_i = loss\\ due\\ to\\ entrance $$
                $$ h_i = 0.5 * \\frac{v_1^2}{2g} $$
                $$ h_{f1} =  Friction\\ loss$$
                $$ h_{f1} = \\frac{4 f L_1 v_1^2}{2 g d_1} $$
                $$ h_e = sudden\\ enlargement\\ loss $$
                $$ h_e = \\frac{(v_1 - v_2)^2}{2 g d_2} $$
                $$ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ ... eq\\ 2 $$
            </span>
        </p>

        <h5>Using eq 2 and continuing equation into eq 1, find v<sub>2</sub></h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ v_2 = $$
            </span>
            <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal06-inp'> <span id='cal06-val-sp'></span> m/s
        </p>

        <h5>Discharge is given by</h5>
        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ Q = A_2 v_2 $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal07-inp'> <span id='cal07-val-sp'></span> m<sup>3</sup>/s = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal08-inp'> <span id='cal08-val-sp'></span> litre/s
        </p>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify1();'  id='temp-btn-4' >Verify</button></div>

    </div>

    `;
    maindiv.innerHTML += text;
    internal_calculations1();
    setTimeout(() => { show_step('tb2-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations1() {
    a1 = (Math.PI / 4) * Math.pow(d1, 2);
    a2 = (Math.PI / 4) * Math.pow(d2, 2);
    r = a2 / a1;
    z = (1 / (2 * g)) + ((0.5 * Math.pow(r, 2)) / (2 * g)) + ((4 * act2_f * l1 * Math.pow(r, 2)) / (2 * g * d1)) + (Math.pow((r - 1), 2) / (2 * g)) + ((4 * act2_f * l2) / (2 * g * d2));
    act2_v2 = Math.sqrt(H / z);
    act2_Q = a2 * act2_v2;
    act2_Q_lit = act2_Q * 1000;
}
function verify1() {
    let btn = document.getElementById('temp-btn-4');
    console.log("A1 = ", a1);
    console.log("A2 = ", a2);
    console.log("r = ", r);
    console.log("z = ", z);
    console.log("act2 v2 = ", act2_v2);
    console.log("act2 Q = ", act2_Q);
    console.log("act2 Q in litre = ", act2_Q_lit);
    let inp1 = document.getElementById('cal04-inp');
    let sp1 = document.getElementById('cal04-val-sp');
    let inp2 = document.getElementById('cal05-inp');
    let sp2 = document.getElementById('cal05-val-sp');
    let inp3 = document.getElementById('cal06-inp');
    let sp3 = document.getElementById('cal06-val-sp');
    let inp4 = document.getElementById('cal07-inp');
    let sp4 = document.getElementById('cal07-val-sp');
    let inp5 = document.getElementById('cal08-inp');
    let sp5 = document.getElementById('cal08-val-sp');
    if (!verify_values(parseFloat(parseFloat(inp1.value).toFixed(2)), parseFloat(a1.toFixed(2)))) {
        alert('A1 is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp2.value).toFixed(2)), parseFloat(a2.toFixed(2)))) {
        alert('A2 is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp3.value).toFixed(2)), parseFloat(act2_v2.toFixed(2)))) {
        alert('V2 is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp4.value).toFixed(2)), parseFloat(act2_Q.toFixed(2)))) {
        alert('Discharge is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(parseFloat(inp5.value).toFixed(2)), parseFloat(act2_Q_lit.toFixed(2)))) {
        alert('Discharge in litres is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(a1).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(a2).toFixed(4)}`;
    inp3.remove();
    sp3.innerText = `${(act2_v2).toFixed(4)}`;
    inp4.remove();
    sp4.innerText = `${(act2_Q).toFixed(4)}`;
    inp5.remove();
    sp5.innerText = `${(act2_Q_lit).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    activity3();
}
//# sourceMappingURL=activity2.js.map