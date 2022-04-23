import 'reflect-metadata';
import { Application } from '@presentation/App';
import { container } from 'tsyringe';

const application = container.resolve(Application) as Application;

application.initialize();
