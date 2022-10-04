$(document).ready(onReady);

let state = {
    hp: 100,
    ap: 100
}

function onReady() {
    $('.arcane-sceptre').on('click', onArcaneSceptre);
    $('.entangle').on('click', onEntangle);
    $('.dragon-blade').on('click', onDragonBlade);
    $('.star-fire').on('click', onStarFire);
}

function onArcaneSceptre() {
    state.hp -= 14;
    state.ap -= 12;

    render();
}

function onEntangle() {
    state.hp -= 9;
    state.ap -= 23;

    render();
}

function onDragonBlade() {
    state.hp -= 47;
    state.ap -= 38;

    render();
}

function onStarFire() {
    state.hp -= 25;
    state.ap -= 33;

    render();
}

function render() {
    $('.ap-text').text(`${state.ap} AP`);
    $('#ap-meter').val(state.ap);

    $('.hp-text').text(`${state.hp} AP`);
    $('#hp-meter').val(state.hp);

    if (state.hp <= 0) {
        $('.freaky-fungus')
            .removeClass('walk')
            .addClass('dead')
    }

    if (state.ap <= 0) {
        $('.freaky-fungus')
            .removeClass('walk')
            .addClass('jump')

        $('.attacks button').prop('disabled', true)
    }
}
