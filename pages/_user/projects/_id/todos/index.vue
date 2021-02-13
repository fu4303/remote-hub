<template>
  <div>
    <h1>Project Name</h1>
    <h3>Todo's:</h3>

    <AddList />
    <hr />
    <draggable
      v-model="lists"
      group="people"
      @start="drag = true"
      @end="drag = false"
      @change="moved"
    >
      <div v-if="lists.length > 0">
        <div v-for="list in lists" :key="list.id">
          <h2 class="pt-6">{{ list.name }}</h2>
          <hr />
          <AddTodo :list_id="list.id" />
          <div v-for="todo in list.todosByListId" :key="todo.id">
            <input
              type="checkbox"
              :checked="todo.isCompleted"
              @change="toggleTodoCompleted(todo.id, !todo.isCompleted)"
            />
            <span @click=";(todoModalOpen = true), (activeTodo = todo)">{{
              todo.name
            }}</span>
          </div>
        </div>
      </div>
      <div v-else>
        <p>No lists to show, yet...</p>
      </div>
    </draggable>
    <TodoModal
      v-show="todoModalOpen"
      :todo="activeTodo"
      @close-modal="todoModalOpen = false"
    />
  </div>
</template>

<script>
import { lists } from '@/graphql/todos/queries'
import { ToggleTodoCompleted } from '@/graphql/todos/mutations'
import {
  UpdateFirstListOrder,
  UpdateSecondListOrder,
} from '@/graphql/todos/mutations'
import draggable from 'vuedraggable'

export default {
  components: {
    draggable,
  },
  data() {
    return {
      activeTodo: {},
      todoModalOpen: false,
      lists: [],
    }
  },
  apollo: {
    lists: {
      query: lists,
      loadingKey: 'loading',
      variables() {
        return {
          id: this.$route.params.id,
        }
      },
    },
  },
  methods: {
    openTodoModal(selectedTodo) {
      this.todoModalOpen = true
    },
    async moved(e) {
      try {
        const { id } = e.moved.element
        await this.$apollo.mutate({
          mutation: UpdateSecondListOrder,
          variables: {
            oldIndex: e.moved.oldIndex + 1,
            newIndex: e.moved.newIndex + 1,
          },
        })
        await this.$apollo.mutate({
          mutation: UpdateFirstListOrder,
          variables: {
            id,
            newIndex: e.moved.newIndex + 1,
          },
          //UPDATES BUT NEEDS REFRESH- LOOK AT UPDATE FUNCTION
        })
        this.$apollo.queries.lists.refetch()
      } catch (error) {
        throw new Error(error)
      }
    },
    async toggleTodoCompleted(todoId, isCompleted) {
      try {
        if (!todoId) return
        await this.$apollo.mutate({
          mutation: ToggleTodoCompleted,
          variables: {
            id: todoId,
            isCompleted,
          },
        })
      } catch (error) {
        throw new Error(error)
      }
    },
  },
}
</script>
