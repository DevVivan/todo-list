export class Todo{
    constructor(title, description, dueDate, priority, project) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.project = project
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getDueDate() {
        return this.dueDate;
    }

    getPriority() {
        return this.priority;
    }

    getProject() {
        return this.project;
    }

    setTitle() {
        this.title = title;
    }

    setDescription() {
        this.description = description;
    }

    setDueDate() {
        this.dueDate = dueDate
    }

    setPriority() {
        this.priority = priority
    }

    setProject() {
        this.project = project
    }
}