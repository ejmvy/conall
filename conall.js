
// IMAGE SLIDE SHOW 

var slides = document.getElementsByClassName('myslides');
var curSlide = 0;
var slideInterval = setInterval(nextSlide, 5000);

var gymTypeObj = {
    groupClassesBtn: 'groupClassesSection',
    personalTrainingBtn: 'personalTrainingSection',
    yogaBtn: 'yogaClassSection'
};


function nextSlide() {
    slides[curSlide].className = 'myslides';
    curSlide = (curSlide + 1) % slides.length;
    slides[curSlide].className = 'myslides showing';
}


function clearPreviousSection(id) {
    for (var key in gymTypeObj) {
        $('#' + key).removeClass('show');
        $('.' + gymTypeObj[key]).addClass('hidden');
    }
}

function addShowClass(id) {
    console.log('this id: ' + id);
    for (var key in gymTypeObj) {
        if (id === key) {
            console.log('KEY: ' + gymTypeObj[key]);
            $('#' + key).addClass('show');
            $('.' + gymTypeObj[key]).removeClass('hidden');
        }
    }
}

var monday = $(`
   <div class="mainCalendar">
    <div class="line" id="changeColor">
        <div class="time">
            <div class="hour">6:00</div>
            <div class="suffix">AM</div>
        </div>
        <div class="class">Pilates</div>
    </div>
    <div class="line">
        <div class="time">
            <div class="hour">7:00</div>
            <div class="suffix">AM</div>
        </div>
        <div class="class">Kettle Bells</div>
    </div>
    <div class="line" id="changeColor">
        <div class="time">
            <div class="hour">8:00</div>
            <div class="suffix">AM</div>
        </div>
        <div class="class">Cross Fit</div>
    </div>
    <div class="line">
        <div class="time">
            <div class="hour">9:00</div>
            <div class="suffix">AM</div>
        </div>
        <div class="class">Yoga</div>
    </div>
    <div class="line" id="changeColor">
        <div class="time">
            <div class="hour">13:00</div>
            <div class="suffix">PM</div>
        </div>
        <div class="class">Body Attack</div>
    </div>
    <div class="line">
        <div class="time">
            <div class="hour">17:00</div>
            <div class="suffix">PM</div>
        </div>
        <div class="class">Kettle Bells</div>
    </div>
    <div class="line" id="changeColor">
        <div class="time">
            <div class="hour">18:00</div>
            <div class="suffix">PM</div>
        </div>
        <div class="class">Body Attack</div>
    </div>
    <div class="line">
        <div class="time">
            <div class="hour">19:00</div>
            <div class="suffix">PM</div>
        </div>
        <div class="class">Cross Fit</div>
    </div>
    <div class="line" id="changeColor">
        <div class="time">
            <div class="hour">20:00</div>
            <div class="suffix">PM</div>
        </div>
        <div class="class">Body Attack</div>
    </div>
</div>`);

var tuesday = $(`
   <div class="mainCalendar">
    <div class="line" id="changeColor">
        <div class="time">
            <div class="hour">6:00</div>
            <div class="suffix">AM</div>
        </div>
        <div class="class">Circuts</div>
    </div>
    <div class="line">
        <div class="time">
            <div class="hour">7:00</div>
            <div class="suffix">AM</div>
        </div>
        <div class="class">Abs</div>
    </div>
    <div class="line" id="changeColor">
        <div class="time">
            <div class="hour">8:00</div>
            <div class="suffix">AM</div>
        </div>
        <div class="class">Kettle Bells</div>
    </div>
    <div class="line">
        <div class="time">
            <div class="hour">9:00</div>
            <div class="suffix">AM</div>
        </div>
        <div class="class">Circuts</div>
    </div>
    <div class="line" id="changeColor">
        <div class="time">
            <div class="hour">13:00</div>
            <div class="suffix">PM</div>
        </div>
        <div class="class">Spin</div>
    </div>
    <div class="line">
        <div class="time">
            <div class="hour">17:00</div>
            <div class="suffix">PM</div>
        </div>
        <div class="class">Body Attack</div>
    </div>
    <div class="line" id="changeColor">
        <div class="time">
            <div class="hour">18:00</div>
            <div class="suffix">PM</div>
        </div>
        <div class="class">Circuts</div>
    </div>
    <div class="line">
        <div class="time">
            <div class="hour">19:00</div>
            <div class="suffix">PM</div>
        </div>
        <div class="class">Spin</div>
    </div>
    <div class="line" id="changeColor">
        <div class="time">
            <div class="hour">20:00</div>
            <div class="suffix">PM</div>
        </div>
        <div class="class">Cross Fit</div>
    </div>
</div>`);

var wednesday = $(`
   <div class="mainCalendar">
    <div class="line" id="changeColor">
        <div class="time">
            <div class="hour">6:00</div>
            <div class="suffix">AM</div>
        </div>
        <div class="class">Spin</div>
    </div>
    <div class="line">
        <div class="time">
            <div class="hour">7:00</div>
            <div class="suffix">AM</div>
        </div>
        <div class="class">Boxercise</div>
    </div>
    <div class="line" id="changeColor">
        <div class="time">
            <div class="hour">8:00</div>
            <div class="suffix">AM</div>
        </div>
        <div class="class">Pilates</div>
    </div>
    <div class="line">
        <div class="time">
            <div class="hour">9:00</div>
            <div class="suffix">AM</div>
        </div>
        <div class="class">Yoga</div>
    </div>
    <div class="line" id="changeColor">
        <div class="time">
            <div class="hour">13:00</div>
            <div class="suffix">PM</div>
        </div>
        <div class="class">Body Attack</div>
    </div>
    <div class="line">
        <div class="time">
            <div class="hour">17:00</div>
            <div class="suffix">PM</div>
        </div>
        <div class="class">Kettle Bells</div>
    </div>
    <div class="line" id="changeColor">
        <div class="time">
            <div class="hour">18:00</div>
            <div class="suffix">PM</div>
        </div>
        <div class="class">Boxercise</div>
    </div>
    <div class="line">
        <div class="time">
            <div class="hour">19:00</div>
            <div class="suffix">PM</div>
        </div>
        <div class="class">Body Attack</div>
    </div>
    <div class="line" id="changeColor">
        <div class="time">
            <div class="hour">20:00</div>
            <div class="suffix">PM</div>
        </div>
        <div class="class">Cross Fit</div>
    </div>
</div>`);

var thursday = $(`
   <div class="mainCalendar">
    <div class="line" id="changeColor">
        <div class="time">
            <div class="hour">6:00</div>
            <div class="suffix">AM</div>
        </div>
        <div class="class">Pilates</div>
    </div>
    <div class="line">
        <div class="time">
            <div class="hour">7:00</div>
            <div class="suffix">AM</div>
        </div>
        <div class="class">Body Attack</div>
    </div>
    <div class="line" id="changeColor">
        <div class="time">
            <div class="hour">8:00</div>
            <div class="suffix">AM</div>
        </div>
        <div class="class">Kettle Bells</div>
    </div>
    <div class="line">
        <div class="time">
            <div class="hour">9:00</div>
            <div class="suffix">AM</div>
        </div>
        <div class="class">Yoga</div>
    </div>
    <div class="line" id="changeColor">
        <div class="time">
            <div class="hour">13:00</div>
            <div class="suffix">PM</div>
        </div>
        <div class="class">Circuts</div>
    </div>
    <div class="line">
        <div class="time">
            <div class="hour">17:00</div>
            <div class="suffix">PM</div>
        </div>
        <div class="class">Spin</div>
    </div>
    <div class="line" id="changeColor">
        <div class="time">
            <div class="hour">18:00</div>
            <div class="suffix">PM</div>
        </div>
        <div class="class">Yoga</div>
    </div>
    <div class="line">
        <div class="time">
            <div class="hour">19:00</div>
            <div class="suffix">PM</div>
        </div>
        <div class="class">Boxercise</div>
    </div>
    <div class="line" id="changeColor">
        <div class="time">
            <div class="hour">20:00</div>
            <div class="suffix">PM</div>
        </div>
        <div class="class">Pilates</div>
    </div>
</div>`);

var friday = $(`
   <div class="mainCalendar">
    <div class="line" id="changeColor">
        <div class="time">
            <div class="hour">7:00</div>
            <div class="suffix">AM</div>
        </div>
        <div class="class">Circuts</div>
    </div>
    <div class="line">
        <div class="time">
            <div class="hour">8:00</div>
            <div class="suffix">AM</div>
        </div>
        <div class="class">Spin</div>
    </div>
    <div class="line" id="changeColor">
        <div class="time">
            <div class="hour">9:00</div>
            <div class="suffix">AM</div>
        </div>
        <div class="class">Body Attack</div>
    </div>
    <div class="line">
        <div class="time">
            <div class="hour">13:00</div>
            <div class="suffix">PM</div>
        </div>
        <div class="class">Pilates</div>
    </div>
    <div class="line" id="changeColor">
        <div class="time">
            <div class="hour">17:00</div>
            <div class="suffix">PM</div>
        </div>
        <div class="class">Body Attack</div>
    </div>
    <div class="line">
        <div class="time">
            <div class="hour">18:00</div>
            <div class="suffix">PM</div>
        </div>
        <div class="class">Circuts</div>
    </div>
    <div class="line" id="changeColor">
        <div class="time">
            <div class="hour">19:00</div>
            <div class="suffix">PM</div>
        </div>
        <div class="class">Yoga</div>
    </div>
</div>`);


var saturday = $(`
   <div class="mainCalendar">
    <div class="line" id="changeColor">
        <div class="time">
            <div class="hour">10:00</div>
            <div class="suffix">AM</div>
        </div>
        <div class="class">Body Attack</div>
    </div>
    <div class="line">
        <div class="time">
            <div class="hour">11:00</div>
            <div class="suffix">AM</div>
        </div>
        <div class="class">Abs</div>
    </div>
    <div class="line" id="changeColor">
        <div class="time">
            <div class="hour">12:00</div>
            <div class="suffix">PM</div>
        </div>
        <div class="class">Kettle Bells</div>
    </div>
    <div class="line">
        <div class="time">
            <div class="hour">13:00</div>
            <div class="suffix">PM</div>
        </div>
        <div class="class">Circuts</div>
    </div>
</div>`);


$(document).ready(function () {

    $('.calendarSection').append(monday);

    var dayHtmlObject = {
        monday: monday,
        tuesday: tuesday,
        wednesday: wednesday,
        thursday: thursday,
        friday: friday,
        saturday: saturday
    }

    $('.day').click(function () {
        $('.calendarSection').empty();
        for (var day in dayHtmlObject) {
            $('#' + day).removeClass('showDay');
            if (day === this.id) {
                $('.calendarSection').append(dayHtmlObject[day]);
                $('#' + this.id).addClass('showDay');
            }
        }
    })

    $('#calendarDays').on('change', function () {
        $('.calendarSection').empty();
        var dayChosen = this.value;
        for (var day in dayHtmlObject) {
            if (day === dayChosen) {
                $('.calendarSection').append(dayHtmlObject[day]);
            }
        }
    })


    $('.classType').click(function () {
        console.log('clicked: ' + this.id);
        clearPreviousSection(this.id);
        addShowClass(this.id);
        // this.classList.add('show');
    });


    // HAMBURGER NAV CODE
    var hamburger = {
        hamToggle: document.querySelector('.hamburger'),
        nav: document.querySelector('.nav2'),

        doToggle: function (e) {
            e.preventDefault();
            this.hamToggle.classList.toggle('expanded');
            this.nav.classList.toggle('expanded');
        }
    };

    hamburger.hamToggle.addEventListener('click', function (e) {
        hamburger.doToggle(e);
    })
    hamburger.nav.addEventListener('click', function (e) {
        hamburger.doToggle(e);
    })
})

