import { Component } from '@angular/core';

@Component({
  selector: 'app-vision-mission',
  standalone: true,
  imports: [],
  templateUrl: './vision-mission.component.html',
  styleUrl: './vision-mission.component.css'
})

export class VisionMissionComponent {

  vision = {
    head: 'Our Vision',
    content: 'NIE strives to be a globally acknowledged institution, fostering a culture of innovation and excellence in technical and scientific education. We aim to cultivate world-class talent that not only excels academically but also embodies strong ethical values and a commitment to societal progress. Through state-of-the-art facilities, cutting-edge research, and collaborative learning environments, we empower students to become leaders and change-makers in a rapidly evolving global landscape. Our vision is to continuously advance the frontiers of knowledge while contributing to sustainable development and the well-being of humanity.',
    img: '../../../assets/images/illustrations/vision.png'
  };

  mission = {
    head: 'Our Mission',
    content: 'Impart state-of-the-art engineering education through strong theoretical foundation and practical training to students in their choice of specialization. Create new knowledge through innovation and cutting-edge research in science and engineering. Provide a platform for inclusiveness and collaboration by following ethical and responsible engineering practices for long-term interaction with academia and industry. Encourage entrepreneurship and develop sustainable technologies for the benefit of global society.',
    img: '../../../assets/images/illustrations/mission.png'
  };

}
